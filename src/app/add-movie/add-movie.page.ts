import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { Movie } from '../movies/movie.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})

export class AddMoviePage implements OnInit {
  movieForm: FormGroup;
  movie: Movie;

  constructor(private moviesService: MoviesService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.formInitializer();
   /* this.movieForm = new FormGroup({
      name: new FormControl(),
      url: new FormControl(),
      Description: new FormControl(),
      year: new FormControl(),
      Director: new FormControl(),
      id: new FormControl()
    }); */
  }
  formInitializer() {
    this.movieForm = this.formBuilder.group({
      id: new FormControl(Math.random().toPrecision()),
      name: [null, [Validators.required]],
      Description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required]],
      Director: [null, [Validators.required]],
      year: [null, [Validators.required]]
    });
}
onAddMovie() {
  this.movie = this.movieForm.value;
  this.moviesService.addMovie(this.movie);
  this.router.navigate(['./movies']);
}
}
