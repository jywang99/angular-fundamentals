import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { CreateEventComponent } from "./events/create-events.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventsListResolver } from "./events/events-list-resolver.service";
import { EventsListComponent } from "./events/events-list.component";


export const appRoutes: Routes = [
    // new event page
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },

    // main page listing events
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },

    // id: URI parameter
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },

    // not found
    { path: '404', component: Error404Component },

    // redirects to /events if path is empty (default)
    // pathMatch: full=exact match, prefix=prefix match
    { path: '', redirectTo: '/events', pathMatch: 'full' },

    { // when path starts from user, load module UserModule from the file path specified
        path: 'user',
        loadChildren: () => import('./user/user.module')
            .then(m => m.UserModule)
    }
]
