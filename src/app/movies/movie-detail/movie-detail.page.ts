import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  loadedMovie: Movie;

  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('movieId')) {
        // redirect
        this.router.navigate(['/movies']);
        return;
      }
      const movieId = paramMap.get('movieId');
      this.loadedMovie = this.moviesService.getMovie(movieId);
    });
  }

  onDeleteMovie() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the movie?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Delete',
          handler: () => {
            this.moviesService.deleteMmovie(this.loadedMovie.id);
            this.router.navigate(['/movies']);
          }
        }
      ]}).then(alertEl => {
        alertEl.present();
      });
  }

}
