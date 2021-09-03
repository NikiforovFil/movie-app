import {Component, Input, OnInit} from '@angular/core'
import {Movie} from "../../../common/models/Movie.model"

@Component({
  selector: 'MF-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie = new Movie('')
  backgroundImage: string = ''


  constructor() {
  }

  ngOnInit(): void {
    this.backgroundImage = this.movie.backdrop_path
    this.movie.genres = [
      {id: 0, name: 'drama'},
      {id: 1, name: 'kriminal'},
      {id: 2, name: 'comedy'}
    ]
    console.log(this.movie)
  }

  getImgUrl(data: string): string {
    return 'https://image.tmdb.org/t/p/w500/' + data
  }
}
