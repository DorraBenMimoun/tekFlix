import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film, FILMS } from '../models/film';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  filmId?:any;
  films : Film[] = FILMS;
  film ?: Film ;
  safeTrailerUrl?: SafeResourceUrl;
  showModal: boolean = false;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { } 

  ngOnInit(){
    console.log("Inside ngOnInit")
    this.filmId = this.route.snapshot.paramMap.get('id');
    console.log("filmId", this.filmId);
    console.log("films", this.films);
    this.film = this.films.find((film) => film.id == parseInt(this.filmId));
    console.log("film", this.film);
  }

  openModal() {
    if(this.film && this.film.trailerUrl) {
      const embedUrl = this.film.trailerUrl.replace("watch?v=", "embed/");
      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      this.showModal = true;
    }
  }
  closeModal() {
    this.showModal = false;
  }
}
