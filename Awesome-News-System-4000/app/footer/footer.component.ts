import { Component } from '@angular/core';

@Component({
    selector: 'footer-app',
    templateUrl: 'footer.component.html',
    styles: [String(require("./footer.component.css"))]
})
export class FooterComponent {
    constructor() { }
}