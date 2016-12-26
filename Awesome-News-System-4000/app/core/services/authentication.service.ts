import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const loginUrl = 'http://localhost:3001/user/login';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post(loginUrl, JSON.stringify({ username: username, password: password }), this.setHeaders())
            .map((response: Response) => {
                let apiResponse = response.json();

                if (apiResponse && apiResponse.user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(apiResponse));
                }

            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    checkIfUserIsLoggedIn(){
        //console.log(localStorage.getItem('currentUser'));
        return localStorage.getItem('currentUser');
    }

    private setHeaders() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}