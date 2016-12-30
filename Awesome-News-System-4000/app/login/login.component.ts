import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AuthenticationService } from '../core/services/authentication.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    pageTitle: String = 'Awesome News System';
    model: any = {};
    loading: boolean = false;
    returnUrl: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        public toastr: ToastsManager
    ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                //this.alertService.error(error);
                this.loading = false;
            });
    }

//     showError() {
//         this.toastr.error('This is not good!', 'Oops!');
//       }
}
