import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  films: Film[] = FILMS;
  
  ngOnInit(): void {
    console.log(this.films);
  }

  
  goToMoviesList()
  {
    this.router.navigate(['/movies-list']);
  }

}
