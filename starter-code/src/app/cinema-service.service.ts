import { Injectable, OnInit } from '@angular/core';
import { Moviez }  from '../sample-movies.js';

interface movie {
id: Number;
title: String;
poster: String; /* A URL of a poster image for the movie.*/
synopsis: String;
genres: Array<string>;
year: Number;
director: String;
actors: Array<string>;
hours: Array<string>;
room: Number;
}

@Injectable({
  providedIn: 'root'
})
export class CinemaServiceService implements OnInit
{
  Movies: movie[] = Moviez;

  constructor () { }

  getMovies ()
  {
    return this.Movies;
  }

  getMovie (id): any
  {
    return this.Movies.find( element => element.id === id );
  }

  ngOnInit () { }
  
}
