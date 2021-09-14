import {Component, Input, OnInit} from '@angular/core'

import {Movie} from "../../../common/models/Movie.model"
import {MovieService} from "../../services/movie.service"

@Component({
  selector: 'MF-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie = new Movie('')
  @Input() genresMap: { [id: number]: string } = {}

  backgroundImage: string = ''

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.backgroundImage = this.movie.backdrop_path
  }

  getGenres(): string[] {
    if (this.movie.genres) return this.movie.genres
    return this.movie.genresId.map(id => this.genresMap[id])
  }

  getDescription(): string {
    if (this.movie.overview.length < 140) return this.movie.overview
    return this.movie.overview.slice(0, 130) + '...'
  }

}
