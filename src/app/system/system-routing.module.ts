import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"


import {SystemComponent} from "./system.component"

const routes: Routes = [
  // {path: `:movieType`, component: SystemComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
