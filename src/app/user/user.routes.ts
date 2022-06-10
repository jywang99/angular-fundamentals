import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";

export const userRoutes = [
    // full path: /user/profile
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent }
]
