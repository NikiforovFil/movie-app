import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"
import {Observable} from "rxjs"

@Injectable()
export class BaseApi {
  private ApiKey = '4ff0d73b5002176095b05f70b1853f4b'
  private baseUrl: string = 'https://api.themoviedb.org/3/movie/550?api_key=4ff0d73b5002176095b05f70b1853f4b'

  constructor(public http: HttpClient) {}

  private getUrl(url: string): string {
    return this.baseUrl + url
  }

  get(data: string): Observable<any> {
    return this.http.get(this.getUrl(data))
  }
}
