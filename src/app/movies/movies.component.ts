import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl:"/movies.component.html"
})
export class MoviesComponent { 

  intro_text="Resourceful Application Developer with an outstanding knowledge in a variety of frameworks and programming Languages, with a total experience of 3 years. Looking to bring further success to the organization through a strong skill set and a proactive demeanour."
  count;
  constructor(private router: Router) {
    this.load();
  }
  
  load()
  {
    this.count=1;
    
    console.log("Count", this.count);
    console.log("Count", this.count);

  }
}



    