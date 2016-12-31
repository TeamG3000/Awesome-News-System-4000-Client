import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { UserService } from '../core/services/user.service';

@Component({
	templateUrl: './register.component.html'
})
export class RegisterComponent {
	pageTitle: String = 'Awesome News System';
	model: any = {};
	loading: boolean = false;
	successfullRegistrationMessage: string = 'You registered successfully on Awesome News System 4000! Please, login';
	errorRegistrationMessage: string = 'Ooops! Something went wrong. '

	constructor(
		private router: Router,
		private userService: UserService,
		public toastr: ToastsManager
	) { }

	register() {
		this.loading = true;
		this.userService.create(this.model)
			.subscribe(
			data => {
				this.showSuccessfulRegistrationMessage();
				this.router.navigate(['user/login']);
			},
			error => {
				this.showErrorRegistrationMessage();
				this.loading = false;
			});
	}

	showSuccessfulRegistrationMessage(){
		this.toastr.success(this.successfullRegistrationMessage);
	}

	showErrorRegistrationMessage(){
		this.toastr.error(this.errorRegistrationMessage);
	}
	
}
