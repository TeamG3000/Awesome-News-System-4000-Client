import { Component, OnInit } from '@angular/core';
import { SimpleArtcileService } from './simple-artcile.service'
import { Headers, Http } from '@angular/http';


@Component({
	templateUrl: './simple-article.component.html',
	providers: [SimpleArtcileService]
})
export class SimpleArticleComponent implements OnInit {
	pageTitle: String = 'Awesome News System';
	simpleArticles: SimpleArtcileService;
	articles: any;
	constructor(private tosho: SimpleArtcileService) {
		this.simpleArticles = tosho;
	}
	ngOnInit() {
		this.simpleArticles.getArticles()
			.then((response: any) => {
				console.log(response.json());
				this.articles = response.json();
			}
			)
	}
}
