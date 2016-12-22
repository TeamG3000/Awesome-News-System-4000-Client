import { Component } from '@angular/core';

@Component({
	selector: 'ans-app',
	templateUrl: '../templates/home.component.html',
	styles: [
		`ul {
			list-style-type: none;
		}`
	]
})
export class HomeComponent {
	pageTitle: String = 'Awesome News System';
}
