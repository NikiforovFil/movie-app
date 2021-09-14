import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"
import {Observable, of} from "rxjs"
import {map, switchMap} from "rxjs/operators"

import {BaseApi} from "../../common/core/baseApi"
import {Movie} from "../../common/models/Movie.model"

@Injectable()
export class MovieService extends BaseApi {
  private genresUrl: string = `genre/movie/list`
  private popularMoviesUrl: string = `movie/popular`
  private topRatedMoviesUrl: string = `movie/top_rated`
  private nowPlayingMoviesUrl: string = `movie/now_playing`
  private upcomingMoviesUrl: string = `movie/upcoming`

  // private movieUrl: string = `movie/550?api_key=${this.apiKey}`

  private pictureUrl: string = 'https://image.tmdb.org/t/p/w500/'

  constructor(public http: HttpClient) {
    super(http)
  }

  getUrlsForTests(): { [name: string]: string } {
    return {
      genresUrl: this.genresUrl,
      popularMoviesUrl: this.popularMoviesUrl,
      topRatedMoviesUrl: this.topRatedMoviesUrl,
      nowPlayingMoviesUrl: this.nowPlayingMoviesUrl,
      upcomingMoviesUrl: this.upcomingMoviesUrl,
      pictureUrl: this.pictureUrl,
    }
  }

  private getMovies(url: string): Observable<Movie[]> {
    return this.get(url)
      .pipe(
        switchMap(response => of(response.results)),
        map(data => data.map((el: Object) => new Movie(el)))
      )
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.getMovies(this.popularMoviesUrl)
  }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.getMovies(this.topRatedMoviesUrl)
  }

  getNowPlayingMovies(): Observable<Movie[]> {
    return this.getMovies(this.nowPlayingMoviesUrl)
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.getMovies(this.upcomingMoviesUrl)
  }

  getImgUrl(url: string): string {
    return this.pictureUrl + url
  }

  getGenres(): Observable<{ id: number, name: string }[]> {
    return this.get(this.genresUrl)
      .pipe(map(response => response.genres))
  }

}
