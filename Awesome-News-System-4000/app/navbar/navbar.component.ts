import { Component } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    private pageTitle: string = 'Awesome News System';

    constructor(private authenticationService: AuthenticationService) { }

    public isLogged() {
        return this.authenticationService.checkIfUserIsLoggedIn();
    }
}