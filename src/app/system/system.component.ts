import {Component, OnDestroy, OnInit} from "@angular/core"
import {ActivatedRoute, Params} from "@angular/router"
import {Subscription, combineLatest, Observable} from "rxjs"
import {switchMap} from "rxjs/operators"

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
        this.genres = genres.genres
        genres.genres.forEach((el: { id: number, name: string }) => this.genresMap[el.id] = el.name)
        this.isLoaded = true
      })
  }

  showMovies(type: string): Observable<Movie[]> {
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

  onToggleDrawer(): void {
    this.isOpenedSideNav = !this.isOpenedSideNav
  }

  ngOnDestroy(): void {
    if (this.sub1$) this.sub1$.unsubscribe()
  }
}
