import { Component } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    private pageTitle: string = 'Awesome News System';
    public userName: string;

    constructor(private authenticationService: AuthenticationService) { }

    public isLogged() {
        return this.authenticationService.checkIfUserIsLoggedIn();
    }

    public getUserName() {
        let user = JSON.parse(localStorage.getItem('currentUser')).user;
        this.userName = user.username;
        return this.userName;
    }
}