import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ArticleDetailsModel } from '../core/models/article-details.model';

@Injectable()
export class ArticleDetailsService {
    private _articleDetailsUrl = 'http://localhost:3001/article-details/';
    private _ratingUrl = '/rating';

    constructor(private _http: Http) {
    }

    getArticle(id: string): Observable<ArticleDetailsModel> {
        return this._http.get(this._articleDetailsUrl + id)
            .map((response: Response) => {
                return response.json();
            })
            .map((jsonResponceObject) => {
                let result = jsonResponceObject.result;
                return <ArticleDetailsModel>result;
            });
    }
    addRatingToArticle(id: string, rating: number) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._articleDetailsUrl + id + this._ratingUrl, JSON.stringify(rating), options)
            .map((response: Response) => {
                return response.json();
            });
    }
}
