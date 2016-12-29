import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
    private headers = new Headers({ 'requester': 'ajax' });
    private simpleArticlesURL = 'http://localhost:3001/search';
    private params = new URLSearchParams();

    constructor(private http: Http) {}

    getSearchedArticles(searchPhrase: string): Observable<any> {
        this.params.set('search', searchPhrase);
        return this.http
            .get(this.simpleArticlesURL, { headers: this.headers, search: this.params })
            .map((res) => {
                console.log(res.json().articles);
                return res.json();
            });
    }
}