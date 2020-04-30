import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AppRoutingModule } from './app-routing.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SwishHeaderComponent } from './swish-header/swish-header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopDashWLstatsComponent } from './top-dash-wlstats/top-dash-wlstats.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BotDashGamehistoryComponent } from './bot-dash-gamehistory/bot-dash-gamehistory.component';
import { TopDashUpcomingComponent } from './top-dash-upcoming/top-dash-upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarComponent,
    SwishHeaderComponent,
    SidenavComponent,
    TopDashWLstatsComponent,
    BotDashGamehistoryComponent,
    TopDashUpcomingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 1000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
