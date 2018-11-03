import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoggedinService} from './loggedin.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private loggedInService: LoggedinService,
                private router: Router) {
    }

    ngOnInit() {

    }

    logIn(): void {
        this.loggedInService.login();
        if (this.loggedInService.loggedIn) {
            const redirect = this.loggedInService.redirectUrl ? this.loggedInService.redirectUrl :
                '/gallery';
            this.router.navigate([redirect]);
        }
    }

    logout(): void {
        this.loggedInService.logout();
        this.router.navigate(['/']);
    }
}
