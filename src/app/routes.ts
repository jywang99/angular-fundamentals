import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { CreateEventComponent } from "./events/create-events.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventsListComponent } from "./events/events-list.component";


export const appRoutes: Routes = [
    // new event page
    { path: 'events/new', component: CreateEventComponent },

    // main page listing events
    { path: 'events', component: EventsListComponent },

    // id: URI parameter
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },

    // not found
    {path: '404', component: Error404Component},

    // redirects to /events if path is empty (default)
    // pathMatch: full=exact match, prefix=prefix match
    { path: '', redirectTo: '/events', pathMatch: 'full' },
]
