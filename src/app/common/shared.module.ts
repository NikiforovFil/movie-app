import {CommonModule} from "@angular/common"
import {HttpClientModule} from "@angular/common/http"
import {NgModule} from "@angular/core"
import {MatRippleModule} from "@angular/material/core"
import {MatDividerModule} from "@angular/material/divider"
import {MatMenuModule} from "@angular/material/menu"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {RouterModule} from "@angular/router"
import {MatListModule} from "@angular/material/list"
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatRippleModule
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatRippleModule
  ]
})

export class SharedModule {}
