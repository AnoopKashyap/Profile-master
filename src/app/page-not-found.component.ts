import { Component } from '@angular/core';

@Component({
  template: `
  <h2 style="padding-left:375px;">Error!!!Page Not Found</h2>
  <h3 style="padding-left:395px;">You might have typed in a wrong URL.</h3>
  <a style="padding-left:395px; font-weight:bold; color:red" routerLink="/home" routerLinkActive="active">Back</a>
  `
})
export class PageNotFoundComponent {
	
}