import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route} from '@angular/router';
import {LoggedinService} from "./loggedin.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private loggedInService: LoggedinService,) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        return this.checkAuth(state.url);
    }

    canLoad(route: Route): boolean {
        return this.checkAuth(route.path);
    }

    private checkAuth(url: string) {

        if (localStorage.getItem('login')) {
            return true;
        }
        this.loggedInService.redirectUrl = url;
        return false;
    }

}
