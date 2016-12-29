import { Component, OnInit } from '@angular/core';
import { SimpleArtcileService } from './simple-artcile.service'
import { Headers, Http } from '@angular/http';

@Component({
	templateUrl: './simple-article.component.html',
	providers: [SimpleArtcileService]
})
export class SimpleArticleComponent implements OnInit {
	articles: any[];
	constructor(private simpleArticleService: SimpleArtcileService) {
		this.articles = [];
	}

	getNextPage() {
		return this.simpleArticleService.getNextPage()
			.subscribe(
			articles => {
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