import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimpleArticleComponent } from '../../simple-article/simple-article.component';
import { AboutComponent } from '../../about/about.component';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
import { SearchComponent } from '../../search/search.component';

const appRoutes: Routes = [
    { path: 'home', component: SimpleArticleComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent },
    { path: 'user/login', component: LoginComponent },
    { path: 'user/register', component: RegisterComponent },
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
