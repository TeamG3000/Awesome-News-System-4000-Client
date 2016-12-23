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

import { AuthenticationService } from '../app/core/services/authentication.service';
import { UserService } from '../app/core/services/user.service';

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
		SearchComponent
	],
	providers: [AuthenticationService, UserService],
	bootstrap: [AppComponent]
})
export class AppModule { }
