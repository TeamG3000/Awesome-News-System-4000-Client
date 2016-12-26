import { Component, OnInit } from '@angular/core';
import { User } from '../core/models/user-model';

@Component({
    templateUrl: './user-profile.component.html',
    styles: [`
    .fade.ng-hide {
  transition:0.5s linear all;
  opacity:0;
}`],
    //styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    public user: User;
    constructor() { }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
    }
}