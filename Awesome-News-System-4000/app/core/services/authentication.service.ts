import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const loginUrl = 'http://localhost:3001/user/login';

@Injectable()
export class AuthenticationService {
    public isLoggedIn: boolean = false;

    constructor(private http: Http) { }

    login(username: string, password: string) {
        this.isLoggedIn = true;
        console.log(this.isLoggedIn);
        return this.http.post(loginUrl, JSON.stringify({ username: username, password: password }), this.setHeaders())
            .map((response: Response) => {
                let apiResponse = response.json();

                if (apiResponse && apiResponse.user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(apiResponse));
                }

            });
    }

    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('currentUser');
    }

    private setHeaders() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}