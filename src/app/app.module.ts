import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import{EventsListComponent} from './events/events-list.component';
import{EventThumbNailComponent} from './events/event-thumbnail.component';
import{NavBarComponent} from './nav/navbar.component'
import {EventsService} from './events/shared/events-service'
import {ToastrService} from './common/toastr.service'
import{EventDetailsComponent} from './events/event-details/event-details.component'
import { RouterModule} from '@angular/router'
import {appRoutes} from './routes'
@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbNailComponent,
    NavBarComponent,
     EventDetailsComponent
  ],
providers:[EventsService,ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
