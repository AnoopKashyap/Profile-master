import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent }  from './movies.component';
import { AddMoviesComponent }  from './add-movies/add-movies.component';
import { DeleteMoviesComponent }  from './delete-movies/delete-movies.component';
import { AcademicsComponent }  from './academics/academics.component';
import { RealmeComponent } from './realme/realme.component';
import { VisionComponent } from './vision/vision.component';
import { ConnectComponent } from './connect/connect.component';

const movieRoutes: Routes = [
	{ 
	  path: 'home',
    component: MoviesComponent,
      children: [ 
	    {
				path: 'tech',
				component: AddMoviesComponent
			},
	    {
	      path: 'experience',
		   	component: DeleteMoviesComponent
			},
			{
	      path: 'academics',
		   	component: AcademicsComponent
			},
			{
	      path: 'realme',
		   	component: RealmeComponent
			},
			{
	      path: 'interests',
		   	component: VisionComponent
			},
			{
	      path: 'connect',
		   	component: ConnectComponent
			},
	  ]
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(movieRoutes)],
	exports: [ RouterModule ],

})
export class MoviesRoutingModule{ }
