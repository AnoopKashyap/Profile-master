import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent }  from './movies/movies.component';
import { AddMoviesComponent }  from './movies/add-movies/add-movies.component';
import { DeleteMoviesComponent }  from './movies/delete-movies/delete-movies.component';
import { AcademicsComponent }  from './movies/academics/academics.component';
import { RealmeComponent } from './movies/realme/realme.component';
import { VisionComponent } from './movies/vision/vision.component';
import { ConnectComponent } from './movies/connect/connect.component';

import { PageNotFoundComponent }  from './page-not-found.component';


const routes: Routes = [
	{
	   path: '',
           redirectTo: '/home',
	   pathMatch: 'full'
        },
        {
                path: 'home',
                component: MoviesComponent,
        },
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
        {
                path: '**',
                component: PageNotFoundComponent 
        }	
];

@NgModule({
  imports: [ 
          RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ } 