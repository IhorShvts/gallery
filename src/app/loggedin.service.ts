import {Injectable, OnInit} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggedinService implements OnInit {
    redirectUrl: string;
    loggedIn: boolean = (localStorage.getItem('login') === 'true') || false;

    constructor() {

    }

    ngOnInit(): void {
    }

    login(): boolean {
        localStorage.setItem('login', 'true');
        return this.loggedIn = true;
    }

    logout(): boolean {
        localStorage.removeItem('login');
        return this.loggedIn = false;
    }
}
