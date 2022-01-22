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
export class ResponseMapping<T> implements NestInterceptor<T, Response<T>> {
    private getData(data: any) {
        if (!!data) {
            return data;
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
                error: "",
            })),
        );
    }
}
