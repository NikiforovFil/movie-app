import {NgModule} from "@angular/core"
import {MatSidenavModule} from "@angular/material/sidenav"

import {SharedModule} from "../common/shared.module"
import {MovieService} from "./services/movie.service"
import {NavbarComponent} from "./shared/components/navbar/navbar.component"
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component"
import {SystemRoutingModule} from "./system-routing.module"
import {SystemComponent} from "./system.component"

@NgModule({
  declarations: [
    SystemComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    SharedModule,
    SystemRoutingModule,
    MatSidenavModule,
  ],
  providers: [
    MovieService
  ]
})

export class SystemModule {}
