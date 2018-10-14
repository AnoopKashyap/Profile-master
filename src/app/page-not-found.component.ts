import { Component } from '@angular/core';

@Component({
  template: `
  <h2>Error!!!Page Not Found</h2>
  <h3>You might have typed in a wrong URL.</h3>
  <a routerLink="/home" routerLinkActive="active">Back</a>
  `
})
export class PageNotFoundComponent {
	
}