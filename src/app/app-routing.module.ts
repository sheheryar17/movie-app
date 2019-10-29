import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        loadChildren: './movies/movies.module#MoviesPageModule'
      },
      {
        path: ':movieId',
        loadChildren: './movies/movie-detail/movie-detail.module#MovieDetailPageModule'
      }
    ]
  },
  { path: 'add-movie', loadChildren: './add-movie/add-movie.module#AddMoviePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
