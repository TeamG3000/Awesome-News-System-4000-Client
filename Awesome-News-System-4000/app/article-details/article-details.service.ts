import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleDetailsService {
    private _articleDetailsUrl = 'http://localhost:3001/article-details/';
    private _ratingUrl = '/rating';
    private _commentUrl = 'http://localhost:3001/comment';

    constructor(private _http: Http) {
    }

    getArticle(id: string): Observable<any> {
        return this._http.get(this._articleDetailsUrl + id)
            .map((response: Response) => {
                return response.json();
            });
    }
    addRatingToArticle(id: string, rating: number) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._articleDetailsUrl + id + this._ratingUrl, JSON.stringify({ rating: rating }), options)
            .map((response: Response) => {
                return response.json();
            });
    }
    addArticleToFavourites(id: string, user: any) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._articleDetailsUrl + id, user, options)
            .map((response: Response) => {
                return response.json();
            });
    }
    addCommentToArticle(comment: string, id: string, userStr: any) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });

        console.log(comment);
        console.log(id);
        console.log(JSON.parse(userStr).user.username);
        return this._http
            .post(this._commentUrl, JSON.stringify({
                commentContent: comment,
                user: {
                    username: JSON.parse(userStr).user.username
                },
                articleId: id
            }), options)
            .map((response: Response) => {
                return response.json();
            });
    }
}
