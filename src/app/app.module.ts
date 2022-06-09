import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  declarations: [ // components
    EventsAppComponent
  ],
  imports: [ // other modules
    BrowserModule
  ],
  providers: [ // services

  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
