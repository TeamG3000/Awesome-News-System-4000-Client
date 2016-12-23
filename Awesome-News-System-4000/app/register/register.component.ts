import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../core/services/user.service';

@Component({
	templateUrl: './register.component.html'
})
export class RegisterComponent {
	pageTitle: String = 'Awesome News System';
	model: any = {};
	loading: boolean = false;

	constructor(
		private router: Router,
		private userService: UserService
	) { }

	register() {
		this.loading = true;
		this.userService.create(this.model)
			.subscribe(
			data => {
				// set success message and pass true paramater to persist the message after redirecting to the login page
				//this.alertService.success('Registration successful', true);
				this.router.navigate(['user/login']);
			},
			error => {
				//this.alertService.error(error);
				this.loading = false;
			});
	}
}
