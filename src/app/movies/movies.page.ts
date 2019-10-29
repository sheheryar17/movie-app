import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit, OnDestroy {
  movies: Movie[];


  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
   // console.log('ngOnInit');
  }
  ionViewWillEnter() {
   // console.log('ionViewWillEnter');
  }
  ionViewDidEnter() {
   // console.log('ionViewDidEnter');
    this.movies = this.moviesService.getAllMovies();
    console.log(this.movies);
  }

  ionViewWillLeave() {
   // console.log('ionViewWillLeave');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy');
  }

}
