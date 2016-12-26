import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './core/routes/app-routing.module';

import { AppComponent } from './app.component';
import { SimpleArticleComponent } from './simple-article/simple-article.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PublicSoursesListComponent } from './sources/public-sources/public-sources-list.component';

import { AuthenticationService } from '../app/core/services/authentication.service';
import { UserService } from '../app/core/services/user.service';
import { SourcesService } from './sources/sources.service';

import { CollapseDirective } from './core/directives/collapse.directive';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		AppRoutingModule
	],

	declarations: [
		AppComponent,
		SimpleArticleComponent,
		AboutComponent,
		LoginComponent,
		RegisterComponent,
		SearchComponent,
		NavbarComponent,
		UserProfileComponent,
		PublicSoursesListComponent,
		CollapseDirective
	],
	providers: [AuthenticationService, UserService, SourcesService],
	bootstrap: [AppComponent]
})
export class AppModule { }
