import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesChanged = new Subject<Movie[]>();
  private movies: Movie[] = [
    {
        id: '1',
        name: 'Fury',
        Description: 'A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945. ',
        Director: 'David Ayer',
        year: '2004',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdjscw62iJ_9TisZCViHarhXx9QUVLZptNpWdhntdSIPYV3Biz'
    },
    {
        id: '2',
        name: 'A Clockwork Orange',
        // tslint:disable-next-line: max-line-length
        Description: 'In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn\'t go as planned.',
        Director: 'Stanley Kubrik',
        year: '1971',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxMmmaGEh902W5faeEn0aMbogOzaswbqgPnT5cdvWhzPIXQ3qW'
    },
    {
        id: '3',
        name: 'World War Z',
        // tslint:disable-next-line: max-line-length
        Description: 'Former United Nations employee Gerry Lane traverses the world in a race against time to stop the Zombie pandemic that is toppling armies and governments, and threatening to destroy humanity itself.',
        Director: 'Mark Foster',
        year: '2013',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2e5iGj1jWroGMpv_2yEbyZPB2Pl5zXf0S12EWRx98xWGqPJk9'
    },
    {
        id: '3',
        name: 'Silence of the lambs',
        // tslint:disable-next-line: max-line-length
        Description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
        Director: 'jonathan Demme',
        year: '1991',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrroH79Qse3l3vAzSfYlPtTgUQs5ul9j3i37gw5ed0B8xnRbcU'
    },
    {
        id: '4',
        name: 'The Shinig',
        // tslint:disable-next-line: max-line-length
        Description: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
        Director: 'Stanley Kubrik',
        year: '1980',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbOpP5jWqoGoa7om38BTK9fblEndew1TvJXgaH9mhJ-KYkcpNn'
    },
    {
        id: '5',
        name: 'Fight Club',
        // tslint:disable-next-line: max-line-length
        Description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more. ',
        Director: 'David Fincher',
        year: '1999',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPEPsc_E2l7cQtG_KWqqZAiKhXMb064TGbfRZk2I43xAk1iYVP'
    },
    {
        id: '5',
        name: 'Titanic',
        // tslint:disable-next-line: max-line-length
        Description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
        Director: 'James Cameron',
        year: '1997',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQV_5zXSpX1JAImq-Ozbfq_2uSI2gXkhKfQ_F-VjCIGkSkQzQbU'
    },
    {
        id: '6',
        name: 'The Shawshank Redemption',
        // tslint:disable-next-line: max-line-length
        Description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        Director: 'Frank Darabont',
        year: '1994',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTP3G4pqFJBMXtLbqnDlteK2yeFM8ynbauInk6gt2KMF1FQPHN3'
    },
    {
        id: '7',
        name: 'Pulp Fiction',
        // tslint:disable-next-line: max-line-length
        Description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption. ',
        Director: 'Quentin Tarantino',
        year: '1994',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUDfPV1ktR2Tvr2XGISJfeuoxmejPi-C6dg9bmz9_p2qyjaZES'
    }
];

getAllMovies() {
  return [...this.movies];
}
getMovie(movieId: string) {
  return {...this.movies.find(movie => {
    return movie.id === movieId;
  })};
}

deleteMmovie(movieId: string) {
  this.movies = this.movies.filter( movie => {
    return movie.id !== movieId;
  });
}3

addMovie(movie: Movie) {
  this.movies.push(movie);
  this.moviesChanged.next(this.movies);
}

  constructor() { }
}
