import {Component, Input, OnDestroy, OnInit} from "@angular/core"
import {forkJoin, Subscription} from "rxjs"

import {Movie} from "../common/models/Movie.model"
import {MovieService} from "./services/movie.service"

@Component({
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})

export class SystemComponent implements OnInit, OnDestroy {
  isLoaded = false
  movies: Movie[] = []
  genresMap: { [id: number]: string } = {}
  genres: any[] = []

  sub1$: Subscription | undefined

  constructor(private moviesService: MovieService) {}

  ngOnInit(): void {
    this.sub1$ = forkJoin([
      this.moviesService.getPopularMovie(),
      this.moviesService.getGenres()
    ])
      .subscribe(([movies, genres]) => {
        this.movies = movies
        genres.genres.forEach((el: { id: number, name: string }) => this.genresMap[el.id] = el.name)
        this.isLoaded = true
      })
  }


  // todo add cache
  onChangeMoviesType(type: string) {
    this.showMovies(type).subscribe((movies: Movie[]) => this.movies = movies)
  }

  showMovies(type: string) {
    switch (type) {
      case 'popular':
        console.info('render popular movies')
        return this.moviesService.getPopularMovie()
      case 'top_rated':
        console.info('render top rated movies')
        return this.moviesService.getTopRatedMovie()
      case 'now_playing':
        console.info('render now playing movies')
        return this.moviesService.getNowPlayingMovie()
      default:
        console.info('render default movies')
        return this.moviesService.getPopularMovie()
    }
  }

  renderTopRatedMovie() {
    this.isLoaded = false
    this.moviesService.getTopRatedMovie()
      .subscribe((movies: Movie[]) => {
        this.movies = movies
        this.isLoaded = true
      })
  }

  ngOnDestroy(): void {
    if (this.sub1$) this.sub1$.unsubscribe()
  }

}
