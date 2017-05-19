import { Component, OnInit, Input } from '@angular/core';
import { GaugeSegment, GaugeLabel } from 'ng-gauge';
@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {
  @Input() inverter: any;
  progressGraph: any;
  constructor() {
  }
  ngOnInit() {
    this.progressGraph = {
      bgRadius: 60,
      bgColor: this.colors.indigo,
      rounded: true,
      reverse: false,
      animationSecs: 1,
      labels: [
        new GaugeLabel({
          color: this.colors.white,
          text: 'Power',
          x: 0,
          y: 25,
          fontSize: '1.5em'
        }),
        new GaugeLabel({
          color: this.colors.green,
          text: `${Math.ceil((this.inverter.power / this.inverter.capacity) * 100)} %`,
          x: 0,
          y: 0,
          fontSize: '2.5em'
        })
      ],
      segments: [
        new GaugeSegment({
          value: this.inverter.power,
          color: this.colors.green,
          borderWidth: 20,
          goal: this.inverter.capacity
        })
      ]
    };
  }
  colors = {
    indigo: '#14143e',
    green: '#549834',
    orange: '#ff6e00',
    yellow: '#f0c800',
    mint: '#00efab',
    cyan: '#05d1ff',
    purple: '#841386',
    white: '#fff'
  };
}
