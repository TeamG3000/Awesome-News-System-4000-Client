import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnChanges {

    private loggedIn: any;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnChanges() {
        this.loggedIn = this.authenticationService.isLoggedIn;
    }

}