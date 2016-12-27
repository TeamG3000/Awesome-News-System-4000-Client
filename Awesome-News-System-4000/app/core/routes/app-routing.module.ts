import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimpleArticleComponent } from '../../simple-article/simple-article.component';
import { AboutComponent } from '../../about/about.component';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
import { SearchComponent } from '../../search/search.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { PublicSoursesListComponent } from '../../sources/public-sources/public-sources-list.component';
import { ArticleDetailsComponent } from '../../article-details/article-details.component';


const appRoutes: Routes = [
    { path: 'home', component: SimpleArticleComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent },
    { path: 'sources', component: PublicSoursesListComponent },
    { path: 'user/login', component: LoginComponent },
    { path: 'user/register', component: RegisterComponent },
    { path: 'user/profile', component: UserProfileComponent },
    { path: 'article-details/:id', component: ArticleDetailsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
