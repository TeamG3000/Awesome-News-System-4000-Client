import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SimpleArtcileService {
    private params = new URLSearchParams();
    private headers = new Headers({ 'requester': 'ajax' });
    private simpleArticlesURL = 'http://localhost:3001/home';
    private currentaPage: number;

    constructor(private http: Http) {
        this.currentaPage = 0;
    }

    getNextPage(): Observable<any[]> {
        this.currentaPage += 1;
        this.params.set('page', `${this.currentaPage}`);
        return this.http
            .get(this.simpleArticlesURL, { headers: this.headers, search: this.params })
            .map((res) => {
                return res.json().simpleArticles;
            });
    }
}