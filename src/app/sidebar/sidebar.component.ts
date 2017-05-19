import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public navs: any[];
  public title: string = 'Menu';
  constructor() {

    this.navs = [
      {
        Title: 'Dashboard'
      },
      {
        Title: 'Add New'
      },
      {
        Title: 'View'
      },
      {
        Title: 'Members'
      },
      {
        Title: 'Settings'
      },
      {
        Title: 'Logout'
      },
    ];
  }

  ngOnInit() {
  }

}
