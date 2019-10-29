import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoviesPage } from './movies.page';
import { MovieItemComponent } from './movie-item/movie-item.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoviesPage, MovieItemComponent ]
})
export class MoviesPageModule {}
