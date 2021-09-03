import {CommonModule} from "@angular/common"
import {HttpClientModule} from "@angular/common/http"
import {NgModule} from "@angular/core"
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
    MatButtonModule
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: []
})

export class SharedModule {}
