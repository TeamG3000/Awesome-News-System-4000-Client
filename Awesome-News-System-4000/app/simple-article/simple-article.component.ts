import { Component, OnInit } from '@angular/core';
import { SimpleArtcileService } from './simple-artcile.service';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
	templateUrl: './simple-article.component.html',
	providers: [SimpleArtcileService],
	styles: [String(require("./simple-articles.component.css"))]
})
export class SimpleArticleComponent implements OnInit {
	articles: any[];
	private user: any;
	constructor(private simpleArticleService: SimpleArtcileService,
		private _authenticationService: AuthenticationService) {

		this.articles = [];
	}

	getNextPage() {
		let userLocalStorage = this._authenticationService.checkIfUserIsLoggedIn();
		if (userLocalStorage !== null) {
			this.user = JSON.parse(userLocalStorage).user;
		} else {
			this.user = null;
		}
		return this.simpleArticleService.getNextPage(this.user)
			.subscribe(
			articles => {
				console.log(articles);
				articles.forEach(element => {
					this.articles.push(element);
				});
			},
			err => console.error(err));
	}

	ngOnInit() {
		this.getNextPage();
	}
}
