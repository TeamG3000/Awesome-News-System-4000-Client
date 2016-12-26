import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Source } from '../core/models/source-model';

@Injectable()
export class SourcesService {
    private headers = new Headers({ 'requester': 'ajax' });
    private sourcesURL = 'http://localhost:3001/sources/list';
    
    constructor(private http: Http) { }

    getSources(): Observable<Source[]> {
        return this.http
            .get(this.sourcesURL, { headers: this.headers })
            .map((res) => {
                return res.json().sourceItems;
            });
    }
}