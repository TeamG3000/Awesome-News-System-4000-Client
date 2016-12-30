import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user-model';

const apiUrl = 'http://localhost:3001';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getById(id: number) {
        return this.http.get(apiUrl + '/user/' + id, this.createHeaderWithJwtToken()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(apiUrl + '/user/register', user, this.createHeaderWithJwtToken()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put(apiUrl + '/user/' + user._id, user, this.createHeaderWithJwtToken()).map((response: Response) => response.json());
    }

    updateSelectedMediaSources(user: User) {
        let body = JSON.stringify({
            username: user.username,
            selectedMedia: user.selectedMedia
        });

        return this.http.post(apiUrl + '/sources/select-media', body, this.setHeadersWithJSON());
    }

    private createHeaderWithJwtToken() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

    private setHeadersWithJSON() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser')).user;
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}