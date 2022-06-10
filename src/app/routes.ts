import { Routes } from "@angular/router";

import {
    CreateEventComponent, 
    EventDetailsComponent,
    EventRouteActivator,
    EventsListResolver,
    EventsListComponent
} from './events/index';
import { Error404Component } from "./errors/404.component";

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
