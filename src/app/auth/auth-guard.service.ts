import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from '@app/auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
        }

        return false;
    }
}