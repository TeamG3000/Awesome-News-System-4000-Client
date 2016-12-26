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
	articles: any[];
	constructor(private tosho: SimpleArtcileService) {}

	getArticles() {
        this.articles = [];
        return this.tosho.getArticles()
            .subscribe(
            articles => {
                this.articles = articles;
            },
            err => console.error(err));
    }

	ngOnInit() {
		this.getArticles();
	}
}