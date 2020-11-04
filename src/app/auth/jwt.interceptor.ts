import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@app/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authorizationHeaderValue = this.authService.authorizationHeaderValue;
        if (authorizationHeaderValue) {
            request = request.clone({
                setHeaders: {
                    Authorization: authorizationHeaderValue,
                    'Content-Type': 'application/json'
                }
            });
        }

        return next.handle(request);
    }
}