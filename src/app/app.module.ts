import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  declarations: [ // components
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  imports: [ // other modules
    BrowserModule
  ],
  providers: [ // services

  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
