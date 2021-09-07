import {Component, OnDestroy, OnInit} from "@angular/core"
import {forkJoin, Subscription} from "rxjs"
import {MatDrawer} from "@angular/material/sidenav"

import {Movie} from "../common/models/Movie.model"
import {MovieTypes} from "../common/models/movieTypes"
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
  isOpenedSideNav = false

  sub1$: Subscription | undefined

  constructor(private moviesService: MovieService) {}

  ngOnInit(): void {
    this.sub1$ = forkJoin([
      this.moviesService.getPopularMovies(),
      this.moviesService.getGenres()
    ])
      .subscribe(([movies, genres]) => {
        this.movies = movies
        this.genres = genres.genres
        genres.genres.forEach((el: { id: number, name: string }) => this.genresMap[el.id] = el.name)
        this.isLoaded = true
      })
  }

  onChangeMoviesType(type: string) {
    this.showMovies(type).subscribe((movies: Movie[]) => this.movies = movies)
  }

  showMovies(type: string) {
    switch (type) {
      case MovieTypes.popular:
        console.info('render popular movies')
        return this.moviesService.getPopularMovies()
      case MovieTypes.topRated:
        console.info('render top rated movies')
        return this.moviesService.getTopRatedMovies()
      case MovieTypes.nowPlaying:
        console.info('render now playing movies')
        return this.moviesService.getNowPlayingMovies()
      case MovieTypes.upcoming:
        console.info('render upcoming movies')
        return this.moviesService.getUpcomingMovies()
      default:
        console.info('render default movies')
        return this.moviesService.getPopularMovies()
    }
  }

  onToggleDrawer() {
    this.isOpenedSideNav = !this.isOpenedSideNav
  }

  ngOnDestroy(): void {
    if (this.sub1$) this.sub1$.unsubscribe()
  }

}
