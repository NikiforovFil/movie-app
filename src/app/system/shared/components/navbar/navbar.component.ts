import {Component, EventEmitter, Input, Output} from '@angular/core'
import {MovieTypes} from "../../../../common/models/movieTypes"

@Component({
  selector: 'MF-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() genres: any[] = []
  @Output() changeMovieType = new EventEmitter<string>()
  @Output() onToggleDrawer = new EventEmitter<void>()

  // todo replace it in sidebar
  MovieTypes = MovieTypes
  years: number[] = []

  activeType: string = MovieTypes.popular

  constructor() {
    this.years = new Array(32)
      .fill('')
      .map((year, idx) => 1990 + idx)
  }

  toggleDrawer() {
    this.onToggleDrawer.emit()
  }

  onChangeMovieType(type: string) {
    if (this.activeType === type) return
    this.activeType = type
    this.changeMovieType.emit(type)
  }

  getButtonColor(type: string): string {
    return this.activeType === type ? 'accent' : 'primary'
  }
}
