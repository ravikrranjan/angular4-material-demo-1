import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-analytics',
  templateUrl: './grid-analytics.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class GridAnalyticsComponent {
  @Input() inverter: any;
  constructor() { }
}
