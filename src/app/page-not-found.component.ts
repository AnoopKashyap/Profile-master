import { Component } from '@angular/core';

@Component({
  template: `
  <h2>Error!!!Page Not Found</h2>
  <h3>Please type in the url's listed below:-</h3>
  <b>For Movies:-</b>
  <p>/movies
  <br/>/movies/add
  <br/>/movies/delete</p>
  <b>For Sports:-</b>
  <p>/sports
  <br/>/sports/list</p>
  <a routerLink="/movies" routerLinkActive="active">Back</a>
  `
})
export class PageNotFoundComponent {
	
}