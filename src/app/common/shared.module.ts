import {CommonModule} from "@angular/common"
import {HttpClientModule} from "@angular/common/http"
import {NgModule} from "@angular/core"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {RouterModule} from "@angular/router"
import {MatListModule} from "@angular/material/list"

@NgModule({
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  declarations: []
})

export class SharedModule {}
