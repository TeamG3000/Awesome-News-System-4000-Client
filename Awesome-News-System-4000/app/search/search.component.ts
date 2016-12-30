import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service'


@Component({
	templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
	searchedArticles: any[];
	constructor(private searchService: SearchService) {
		this.searchedArticles = [];
	}

	public search(searchPhares: string) {
		return this.searchService.getSearchedArticles(searchPhares)
			.subscribe(
			articles => {
				this.searchedArticles = articles.articles;
			},
			err => console.error(err));
	}
	ngOnInit() {
		this.search(localStorage.getItem("searchPhrase"));
		localStorage.removeItem("searchPhrase");
	}
}