import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class SongInterceptorService implements HttpInterceptor {
    intercept (req: HttpRequest<any>, next: HttpHandler) {
        const modifiedReq = req.clone({url: req.url + "&api_key=d1792dfb570eba0528737c6d2285e841&format=json"})
        return next.handle(modifiedReq);
    }
}