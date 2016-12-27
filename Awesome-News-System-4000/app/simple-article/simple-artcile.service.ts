import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SimpleArtcileService {
    private headers = new Headers({ 'requester': 'ajax' });
    private simpleArticlesURL = 'http://localhost:3001/home';
    private params = new URLSearchParams();
    private currentaPage: number;
    private nextPage: number;

    constructor(private http: Http) {
        this.currentaPage = 1;
    }

    getArticles(): Observable<any[]> {
        return this.http
            .get(this.simpleArticlesURL, { headers: this.headers })
            .map((res) => {
                // console.log(res.json());
                return res.json();
            });
    }
    getNextPage(): Observable<any[]> {
        this.nextPage = this.currentaPage + 1;
        this.params.set('page=', `${this.nextPage}`);
        return this.http
            .get(this.simpleArticlesURL, { headers: this.headers, search: this.params })
            .map((res) => {
                // console.log(res.json());
                return res.json();
            });

    }
}