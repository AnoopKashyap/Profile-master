import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageNotFoundComponent }  from './page-not-found.component';

import { MoviesModule }  from './movies/movies.module';
import { AppRoutingModule }  from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MoviesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
