import { Component, OnInit } from '@angular/core';
import { User } from '../core/models/user-model';
import { CollapseDirective } from '../core/directives/collapse.directive';

@Component({
    templateUrl: './user-profile.component.html',
    styles: [String(require('./user-profile.component.css'))]
})
export class UserProfileComponent implements OnInit {
    public isCollapsedContentFavouriteArticles:boolean = false;
    public isCollapsedContentSelectedMedia:boolean = false;
    public isCollapsedContentUserSettings:boolean = false; 
    
    public user: User;

    constructor() { }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
    }
}