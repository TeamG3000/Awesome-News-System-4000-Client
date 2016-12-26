import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SimpleArtcileService {

    private headers = new Headers({ 'requester': 'ajax' });
    private simpleArticlesURL = 'http://localhost:3001/home';

    constructor(private http: Http) { }

    getArticles(): any {
        return this.http.get(this.simpleArticlesURL, {
            headers: this.headers
        })
            .toPromise();
    }
}