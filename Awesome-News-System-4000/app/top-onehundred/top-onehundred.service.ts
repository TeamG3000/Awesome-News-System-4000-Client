import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TopOneHundredService {
private topArticlesURL='http://localhost:3001/topRatedArticles';

constructor(private http:Http) {
}
    getTopOneHundredArticles(): Observable<any[]> {
        return this.http
            .get(this.topArticlesURL)
            .map((res) => {
                return res.json().topArticles;
            });
    }
}