import {Component, OnDestroy, OnInit} from "@angular/core"
import {ActivatedRoute, Params} from "@angular/router"
import {Subscription, combineLatest, Observable} from "rxjs"
import {switchMap} from "rxjs/operators"

import {Movie} from "../common/models/Movie.model"
import {MoviesTypes} from "../common/models/moviesTypes"
import {MovieService} from "./services/movie.service"

@Component({
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})

export class SystemComponent implements OnInit, OnDestroy {
  isLoaded = false
  movies: Movie[] = []
  genresMap: { [genreId: number]: string } = {}
  genres: { id: number, name: string }[] = []
  isOpenedSideNav = false

  sub1$: Subscription | undefined

  constructor(private moviesService: MovieService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub1$ = combineLatest([
      this.route.params
        .pipe(
          switchMap((param: Params) => this.showMovies(param.movieType))
        ),
      this.moviesService.getGenres()
    ])
      .subscribe(([movies, genres]) => {
        this.movies = movies
        this.genres = genres
        genres.map((el: { id: number, name: string }) => this.genresMap[el.id] = el.name)
        this.isLoaded = true
      })
  }

  showMovies(type: string): Observable<Movie[]> {
    // this.isLoaded = false
    switch (type) {
      case MoviesTypes.popular:
        console.info('render popular movies')
        return this.moviesService.getPopularMovies()
      case MoviesTypes.topRated:
        console.info('render top rated movies')
        return this.moviesService.getTopRatedMovies()
      case MoviesTypes.nowPlaying:
        console.info('render now playing movies')
        return this.moviesService.getNowPlayingMovies()
      case MoviesTypes.upcoming:
        console.info('render upcoming movies')
        return this.moviesService.getUpcomingMovies()
      default:
        console.info('render default movies')
        return this.moviesService.getPopularMovies()
    }
  }

  onToggleDrawer(): void {
    this.isOpenedSideNav = !this.isOpenedSideNav
  }

  ngOnDestroy(): void {
    if (this.sub1$) this.sub1$.unsubscribe()
  }
}
