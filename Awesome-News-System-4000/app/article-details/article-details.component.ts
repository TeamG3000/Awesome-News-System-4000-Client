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
    isAddedToFavourites: boolean = false;
    isRatingAdded: boolean = false;
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
        this.user = JSON.parse(this._authenticationService.checkIfUserIsLoggedIn()).user;
        if (this.user !== null) {
            this.userExists = true;
        }
    }
    onSubmitRating() {
        this._service.addRatingToArticle(this.article._id, this.articleRatingToAdd)
            .subscribe(response => {
                this.article.rating = response.article.rating;
                this.isRatingAdded = true;
            });
    }
    onAddToFavourites() {
        this._service.addArticleToFavourites(this.article._id, this.user, this._route.snapshot.params['id'])
            .subscribe(response => {
                this.isAddedToFavourites = true;
                let updatedUser = JSON.parse(this._authenticationService.checkIfUserIsLoggedIn()).user;
                updatedUser.favouriteArticles.push({
                    _id: this.article._id,
                    imageUrl: this.article.imageUrl,
                    originalId: this._route.snapshot.params['id'],
                    publishedAt: this.article.publishedAt,
                    source: this.article.source,
                    title: this.article.title
                });
                localStorage.removeItem('currentUser');
                localStorage.setItem('currentUser', JSON.stringify({ user: updatedUser }));
            }, error => {
                alert('Item already in favourites.');
            });
    }
    onAddCommentToArticle() {
        this._service.addCommentToArticle(this.articleCommentToAdd, this.article._id, this.user).subscribe(
            item => this.article.comments = item.comments
        );
    }
    getArticleDetails(id: string) {
        this._service.getArticle(id).subscribe(
            data => this.article = data.result
        );
    }
}
