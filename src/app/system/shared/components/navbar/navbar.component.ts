import {Component, EventEmitter, Output} from '@angular/core'

import {MovieTypes} from "../../../../common/models/movieTypes"

@Component({
  selector: 'MF-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() onToggleDrawer = new EventEmitter<void>()

  MovieTypes = MovieTypes

  toggleDrawer() {
    this.onToggleDrawer.emit()
  }
}
