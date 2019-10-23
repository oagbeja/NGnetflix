import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list-component';
import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { PracComponent } from './prac/prac.component';
import { FavComponent } from './events/fav/fav.component';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,

  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    NavBarComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    PracComponent,
    FavComponent,

  ],

  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
