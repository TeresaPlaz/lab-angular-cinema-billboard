import { Component, OnInit } from '@angular/core';
import { CinemaServiceService } from '../cinema-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  movie: object;
  id: Number;

  constructor ( private CinemaService: CinemaServiceService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit ()
  {
    this.route.params.subscribe( ( params ) => this.id = Number( params[ 'id' ] ) );
    this.movie = this.CinemaService.getMovie( this.id );
  }

  goHome ()
  {
    this.router.navigate( [ "home" ] );
  }

}
