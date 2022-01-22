import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Response<T> {
    data: T;
}

@Injectable()
export class ResponsePaginationMapping<T>
    implements NestInterceptor<T, Response<T>>
{
    private getData(data: any) {
        if (!!data) {
            return data.items;
        }
        return [];
    }
    private getPagin(data: any) {
        if (!!data) {
            return {
                total: data.meta.totalItems,
                total_page: data.meta.totalPages,
                page: data.meta.currentPage,
            };
            return data.pagination;
        }
        return {};
    }

    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<Response<T>> {
        return next.handle().pipe(
            map(data => ({
                meta: {
                    code: 200,
                    msg: "success",
                },
                data: this.getData(data),
                pagination: this.getPagin(data),
                error: "",
            })),
        );
    }
}
