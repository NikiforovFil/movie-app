import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"
import {Observable} from "rxjs"

@Injectable()
export class BaseApi {
  private baseUrl: string = `https://api.themoviedb.org/3/`
  private apiKey: string = '4ff0d73b5002176095b05f70b1853f4b'

  constructor(public http: HttpClient) {}

  private getUrl(url: string, page: number = 1): string {
    return this.baseUrl + url + `?api_key=${this.apiKey}&page=${page}`
  }

  get(url: string): Observable<any> {
    return this.http.get(this.getUrl(url))
  }

}
