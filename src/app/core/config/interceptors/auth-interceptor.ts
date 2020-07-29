import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../api.config';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const localUser = this.storage.getLocalUser();

        const isLoggedIn = localUser && localUser.token;
        const isApiUrl = request.url.startsWith(API_CONFIG.baseUrl);
        const N = API_CONFIG.baseUrl.length;
        const requestToAPI = request.url.substring(0, N) === API_CONFIG.baseUrl;

        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${localUser.token}` }
            });
        }
        return next.handle(request);
}




}
export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};
