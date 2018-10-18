import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {LoggedinService} from "./loggedin.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private loggedInService: LoggedinService) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        if (localStorage.getItem('login')) {
            return true;
        }
         this.loggedInService.redirectUrl = url;
        return false;
    }

}
