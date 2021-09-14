import {Component, Input} from '@angular/core'

import {MoviesTypes} from "../../../../common/models/moviesTypes"

@Component({
  selector: 'MF-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {
  @Input() genres: { id: number, name: string }[] = []

  MovieTypes = MoviesTypes
  years: number[] = []

  constructor() {
    this.years = new Array(32)
      .fill('')
      .map((year, idx) => 1990 + idx)
  }
}
