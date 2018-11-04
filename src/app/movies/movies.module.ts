import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent }  from './movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { DeleteMoviesComponent } from './delete-movies/delete-movies.component';
import { AcademicsComponent } from './academics/academics.component';
import { RealmeComponent } from './realme/realme.component';
import { VisionComponent } from './vision/vision.component';
import { ConnectComponent } from './connect/connect.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatExpansionModule,
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    MatIconModule
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
