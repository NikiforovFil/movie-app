import {Component, EventEmitter, Output} from '@angular/core'

import {MoviesTypes} from "../../../../common/models/moviesTypes"

@Component({
  selector: 'MF-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() onToggleDrawer = new EventEmitter<void>()

  MovieTypes = MoviesTypes

  toggleDrawer() {
    this.onToggleDrawer.emit()
  }
}
