import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { SearchService } from './search.service'


@Component({
	templateUrl: './search.component.html',
})
export class SearchComponent {
	searchedArticles: any[];
	constructor(private searchService: SearchService) {
		this.searchedArticles = [];
	}

	public search(searchPhares: string) {
		console.log(searchPhares);
		return this.searchService.getSearchedArticles(searchPhares)
			.subscribe(
			articles => {
				this.searchedArticles = articles.articles;
				console.log(this.searchedArticles);
			},
			err => console.error(err));
	}
}
