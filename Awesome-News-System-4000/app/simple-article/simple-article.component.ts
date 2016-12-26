import { Component, OnInit } from '@angular/core';
import { SimpleArtcileService } from './simple-artcile.service'
import { Headers, Http } from '@angular/http';


@Component({
	templateUrl: './simple-article.component.html',
	providers: [SimpleArtcileService]
})
export class SimpleArticleComponent implements OnInit {
	pageTitle: String = 'Awesome News System';
	articles: any[];
	constructor(private simleArticleService: SimpleArtcileService) {}

	getArticles() {
        this.articles = [];
        return this.simleArticleService.getArticles()
            .subscribe(
            articles => {
                this.articles = articles;
				console.log(this.articles);
            },
            err => console.error(err));
    }

	ngOnInit() {
		this.getArticles();
	}
}