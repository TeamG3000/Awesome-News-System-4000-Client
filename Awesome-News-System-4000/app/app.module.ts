import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './core/routes/app-routing.module';

import { AppComponent } from './app.component';
import { SimpleArticleComponent } from './simple-article/simple-article.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

@NgModule({
	imports: [
		BrowserModule,
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

	bootstrap: [AppComponent]
})
export class AppModule { }
