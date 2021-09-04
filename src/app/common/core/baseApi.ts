import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"
import {Observable} from "rxjs"

@Injectable()
export class BaseApi {
  private baseUrl: string = `https://api.themoviedb.org/3/`

  constructor(public http: HttpClient) {}

  private getUrl(url: string): string {
    return this.baseUrl + url
  }

  get(url: string): Observable<any> {
    return this.http.get(this.getUrl(url))
  }

}
