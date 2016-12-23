import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const loginUrl = 'http://localhost:3001/user/login';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post(loginUrl, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}