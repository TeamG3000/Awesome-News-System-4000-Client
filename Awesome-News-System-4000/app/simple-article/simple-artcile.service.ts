import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SimpleArtcileService {
    private headers = new Headers({ 'requester': 'ajax' });
    private simpleArticlesURL = 'http://localhost:3001/home';

    constructor(private http: Http) { }

    getArticles(): Observable<any[]> {
        return this.http
            .get(this.simpleArticlesURL, { headers: this.headers })
            .map((res) => {
                console.log(res.json());
                return res.json();
            });
    }
}