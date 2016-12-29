import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleDetailsModel } from '../../app/core/models/article-details.model';
import { ArticleDetailsService } from './article-details.service';
import { AuthenticationService } from '../core/services/authentication.service';

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
    private user: any;
    userExists: boolean = false;

    constructor(private _service: ArticleDetailsService,
        private _authenticationService: AuthenticationService,
        private _route: ActivatedRoute) {
    }
    ngOnInit() {
        this.getArticleDetails(this._route.snapshot.params['id']);
        this.isUserLogged();
    }
    isUserLogged() {
        this.user = this._authenticationService.checkIfUserIsLoggedIn();
        if (this.user !== null) {
            this.userExists = true;
        }
    }
    onSubmitRating() {
        this._service.addRatingToArticle(this.article._id, this.articleRatingToAdd)
            .subscribe(response => console.log(response));
    }
    onAddToFavourites() {
        this._service.addArticleToFavourites(this.article._id, this.user)
            .subscribe(response => console.log(response));
    }
    onAddCommentToArticle() {
        this._service.addCommentToArticle(this.articleCommentToAdd, this.article._id, this.user)
            .subscribe(
            item => this.article.comments = item.comments,
            error => this.errorMessage = <any>error
            );
    }
    getArticleDetails(id: string) {
        this._service.getArticle(id).subscribe(
            data => this.article = data.result,
            error => this.errorMessage = <any>error
        );
    }
}
