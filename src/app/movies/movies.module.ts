import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent }  from './movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { DeleteMoviesComponent } from './delete-movies/delete-movies.component';
import { MoviesRoutingModule }  from './movies-routing.module';
import { AcademicsComponent } from './academics/academics.component';
import { RealmeComponent } from './realme/realme.component';
import { VisionComponent } from './vision/vision.component';
import { ConnectComponent } from './connect/connect.component';


@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent,
    AddMoviesComponent,
    DeleteMoviesComponent,
    AcademicsComponent,
    RealmeComponent,
    VisionComponent,
    ConnectComponent
  ]
})
export class MoviesModule { }
