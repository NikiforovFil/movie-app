import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"
import {Observable, of} from "rxjs"
import {map, switchMap} from "rxjs/operators"

import {BaseApi} from "../../common/core/baseApi"
import {Movie} from "../../common/models/Movie.model"

@Injectable()
export class MovieService extends BaseApi {
  private apiKey: string = '4ff0d73b5002176095b05f70b1853f4b'
  private genresUrl: string = `genre/movie/list?api_key=${this.apiKey}`
  private popularMoviesUrl: string = `movie/popular?api_key=${this.apiKey}&page=1`
  private topRatedMoviesUrl: string = `movie/top_rated?api_key=${this.apiKey}&page=1`
  private nowPlayingMoviesUrl: string = `movie/now_playing?api_key=${this.apiKey}&page=1`

  // private movieUrl: string = `movie/550?api_key=${this.apiKey}`

  private pictureUrl: string = 'https://image.tmdb.org/t/p/w500/'

  constructor(public http: HttpClient) {
    super(http)
  }

  private getMovies(url: string): Observable<Movie[]> {
    return this.get(url)
      .pipe(
        switchMap(response => of(response.results)),
        map(data => data.map((el: Object) => new Movie(el)))
      )
  }

  getPopularMovie(): Observable<Movie[]> {
    return this.getMovies(this.popularMoviesUrl)
  }

  getTopRatedMovie(): Observable<Movie[]> {
    return this.getMovies(this.topRatedMoviesUrl)
  }

  getNowPlayingMovie(): Observable<Movie[]> {
    return this.getMovies(this.nowPlayingMoviesUrl)
  }

  getImgUrl(url: string): string {
    return this.pictureUrl + url
  }

  getGenres(): Observable<any> {
    return this.get(this.genresUrl)
  }

}
