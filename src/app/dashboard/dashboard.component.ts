import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  inverters: any[];
  solar_groups: any[];
  total_group_number: number;
  
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.dashboardService.getInverters().subscribe(
      (data: any) => {
        this.inverters = data.inverters;
        this.solar_groups = data.solar_groups;
        this.total_group_number = data.total_group_number;
      },
      err => {
        console.log(err);
      });
  }

}
