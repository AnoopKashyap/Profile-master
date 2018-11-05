import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { fadeAnimation } from '../animations';


@Component({
  templateUrl:"./movies.component.html",
  animations: [fadeAnimation] // register the animation

})
export class MoviesComponent { 

  intro_text="Resourceful Application Developer with an outstanding knowledge in a variety of frameworks and programming Languages, with a total experience of 3 years. Looking to bring further success to the organization through a strong skill set and a proactive demeanour."
  count;
  constructor(private router: Router) {
  }
  
  
}



    