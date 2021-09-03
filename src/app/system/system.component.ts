import {Component, OnInit} from "@angular/core"

import {Movie} from "../common/models/Movie.model"
import {MovieService} from "./services/movie.service"

@Component({
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})

export class SystemComponent implements OnInit {
  isLoaded = false
  movie: Movie = new Movie('')


  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovie()
      .subscribe((data: Movie) => {
        this.movie = data
        this.isLoaded = true
      })
  }

}
