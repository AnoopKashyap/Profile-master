import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';




@Component({
  templateUrl:"./delete-movies.component.html",
  styleUrls: ['./delete-movies.component.css']

}) 
export class DeleteMoviesComponent { 

  @Input()dis=true;
  panelOpenState = false;

  
}
    