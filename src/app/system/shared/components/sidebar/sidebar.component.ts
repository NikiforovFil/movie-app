import {Component, Input} from '@angular/core'

import {MovieTypes} from "../../../../common/models/movieTypes"

@Component({
  selector: 'MF-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {
  @Input() genres: any[] = []

  MovieTypes = MovieTypes
  years: number[] = []

  constructor() {
    this.years = new Array(32)
      .fill('')
      .map((year, idx) => 1990 + idx)
  }
}
