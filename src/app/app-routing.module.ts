import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {MoviesTypes} from "./common/models/moviesTypes"
import {SystemComponent} from "./system/system.component"


const routes: Routes = [
  {path: '', redirectTo: `system/${MoviesTypes.popular}`, pathMatch: 'full'},
  {path: 'system/:movieType', component: SystemComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
