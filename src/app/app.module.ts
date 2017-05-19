import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridAnalyticsComponent } from './dashboard/grid-analytics.component';
import { GridDeviceComponent } from './dashboard/grid-device.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardService } from './dashboard/dashboard.service';
import { GaugeModule } from 'ng-gauge';
import { GaugeComponent } from './gauge/gauge.component';
import {MdTabsModule, MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GaugeComponent,
    GridAnalyticsComponent,
    GridDeviceComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdTabsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    GaugeModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
