import { Component, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: 'ans-app',
	templateUrl: './app.component.html',
	styles: [String(require('../node_modules/ng2-toastr/bundles/ng2-toastr.min.css')), String(require('./../styles.css'))]
})
export class AppComponent {
	pageTitle: String = 'Awesome News System';

	constructor(private toastr: ToastsManager, private viewContainerRef: ViewContainerRef) {
		this.toastr.setRootViewContainerRef(viewContainerRef);
	}
}