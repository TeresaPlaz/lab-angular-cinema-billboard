import { Component, OnInit } from '@angular/core';
import { CinemaServiceService } from '../cinema-service.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit
{

  constructor ( private CinemaService: CinemaServiceService ) { }
  
  movies: object[] = this.CinemaService.Movies;

  ngOnInit () { }


}
