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
  title :string = ''


  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovie()
      .subscribe((data: Movie) => {
        this.movie = data
        this.title = data.original_title
        this.isLoaded = true
        console.log(this.movie)
        console.log('isLoaded ', this.isLoaded)
        console.log(this.movie.original_title)
      })
  }

}
