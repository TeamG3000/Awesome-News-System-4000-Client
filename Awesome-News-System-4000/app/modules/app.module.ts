import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../modules/routes/app-routing.module';

import { HomeComponent } from '../components/home.component';
import { SimpleArticleComponent } from '../components/simple-article.component';
import { AboutComponent } from '../components/about.component';
import { LoginComponent } from '../components/login.component';
import { RegisterComponent } from '../components/register.component';
import { SearchComponent } from '../components/search.component';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
	],

	declarations: [
		HomeComponent,
		SimpleArticleComponent,
		AboutComponent,
		LoginComponent,
		RegisterComponent,
		SearchComponent
	],

	bootstrap: [HomeComponent]
})
export class AppModule { }
