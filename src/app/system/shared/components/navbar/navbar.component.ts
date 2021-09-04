import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'MF-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() genres: any[] = []
  @Output() changeMovieType = new EventEmitter<string>()

  years: number[] = []

  constructor() {
    this.years = new Array(32)
      .fill('')
      .map((year, idx) => 1990 + idx)
  }

  onChangeMovieType(type: string) {
    this.changeMovieType.emit(type)
  }

  ngOnInit(): void {
  }

}
