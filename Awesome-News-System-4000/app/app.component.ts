import { Component } from '@angular/core';

@Component({
	selector: 'ans-app',
	templateUrl: './app.component.html',
	styles: [
		`ul {
			list-style-type: none;
		}`
	]
})
export class AppComponent {
	pageTitle: String = 'Awesome News System';
}
