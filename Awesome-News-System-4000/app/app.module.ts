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

import { AuthenticationService } from '../app/core/services/authentication.service';
import { UserService } from '../app/core/services/user.service';
import { SimpleArtcileService } from '../app/simple-article/simple-artcile.service';

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
		NavbarComponent
	],
	providers: [AuthenticationService, UserService, SimpleArtcileService],
	bootstrap: [AppComponent]
})
export class AppModule { }
