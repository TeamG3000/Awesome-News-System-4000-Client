import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Source } from '../core/models/source-model';

@Injectable()
export class SourcesService {
    private headers = new Headers({ 'requester': 'ajax' });
    private sourcesURL = 'http://localhost:3001/sources/list';
    private sourceDetailsUrl = 'http://localhost:3001/sources/source-details/';

    constructor(private http: Http) { }

    getSources(): Observable<Source[]> {
        return this.http
            .get(this.sourcesURL, { headers: this.headers })
            .map((res) => {
                return res.json().sourceItems;
            });
    }

    getSourceById(id: string): Observable<Source> {
        return this.http
            .get(this.sourceDetailsUrl + id)
            .map((res) => {
                return res.json();
            });
    }
}