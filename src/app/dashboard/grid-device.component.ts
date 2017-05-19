import { Component, Input } from '@angular/core';

@Component({
    selector: 'grid-device',
    template: `
   <div class="col-md-2 col-sm-2 col-xs-2">
    <span class="uppercase">Device Connection</span>
    <div>
        <p><span class="black">{{inverter.total_ajbs}} </span>Connected </p>
        <p><span class="black">{{inverter.disconnected_ajbs}} </span>Disconnected </p>
    </div>
    </div>
  `,
    styleUrls: ['./dashboard.component.css']
})
export class GridDeviceComponent {
    @Input() inverter: any;
    constructor() { }
}
