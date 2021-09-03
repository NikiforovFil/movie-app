import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"
import {Observable} from "rxjs"
import {map} from "rxjs/operators"

import {BaseApi} from "../../common/core/baseApi"
import {Movie} from "../../common/models/Movie.model"

@Injectable()
export class MovieService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http)
  }

  getMovie(): Observable<Movie> {
    return this.get('')
      .pipe(
        map(el => new Movie(el))
      )
  }
}
