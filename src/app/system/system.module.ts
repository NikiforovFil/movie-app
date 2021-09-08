import {NgModule} from "@angular/core"
import {MatCardModule} from "@angular/material/card"
import {MatSidenavModule} from "@angular/material/sidenav"

import {SharedModule} from "../common/shared.module"
import {MovieService} from "./services/movie.service"
import {NavbarComponent} from "./shared/components/navbar/navbar.component"
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component"
import {SystemRoutingModule} from "./system-routing.module"
import {SystemComponent} from "./system.component";
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component'

@NgModule({
  declarations: [
    SystemComponent,
    SidebarComponent,
    NavbarComponent,
    MovieCardComponent,
    MoviesListComponent
  ],
  imports: [
    SharedModule,
    SystemRoutingModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [
    MovieService
  ]
})

export class SystemModule {}
