import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  declarations: [ // components
    EventsAppComponent,
    EventsListComponent
  ],
  imports: [ // other modules
    BrowserModule
  ],
  providers: [ // services

  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
