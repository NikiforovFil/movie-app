import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'MF-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
