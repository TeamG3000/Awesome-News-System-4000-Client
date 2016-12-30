import { Component, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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

	constructor(private toastr: ToastsManager, private viewContainerRef: ViewContainerRef) {
		this.toastr.setRootViewContainerRef(viewContainerRef);
	}
}
