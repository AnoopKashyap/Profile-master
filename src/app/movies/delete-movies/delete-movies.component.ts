import { Component, Input } from '@angular/core';



@Component({
  templateUrl:"delete-movies.component.html",
  styleUrls: ['./delete-movies.component.css']

}) 
export class DeleteMoviesComponent { 

  @Input()dis=true;
  
}
    