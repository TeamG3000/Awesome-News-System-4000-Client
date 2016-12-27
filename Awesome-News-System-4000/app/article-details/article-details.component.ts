import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleDetailsModel } from '../../app/core/models/article-details.model';
import { ArticleDetailsService } from './article-details.service';

@Component({
    templateUrl: './article-details.component.html',
    providers: [
        ArticleDetailsService
    ]
})
export class ArticleDetailsComponent implements OnInit {
    article: ArticleDetailsModel;
    articleRatingToAdd: number;
    articleCommentToAdd: string;
    errorMessage: string;

    constructor(private _service: ArticleDetailsService,
        private _route: ActivatedRoute) {
    }
    ngOnInit() {
        this.getArticleDetails(this._route.snapshot.params['id']);
    }
    onSubmitRating() {
        this._service.addRatingToArticle(this.article._id.toString(), this.articleRatingToAdd)
            .subscribe(response => console.log(response));
    }
    getArticleDetails(id: string) {
        this._service.getArticle(id).subscribe(
            article => this.article = article,
            error => this.errorMessage = <any>error
        );
    }
}
