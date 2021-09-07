import {CommonModule} from "@angular/common"
import {HttpClientModule} from "@angular/common/http"
import {NgModule} from "@angular/core"
import {MatMenuModule} from "@angular/material/menu"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {RouterModule} from "@angular/router"
import {MatListModule} from "@angular/material/list"
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: []
})

export class SharedModule {}
