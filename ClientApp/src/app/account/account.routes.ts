import { Route } from '@angular/router';
import { RegisterComponent, LoginComponent } from './components/';

export const registerRoutes: Route[] = [
  { path: '', component: RegisterComponent },
];

export const loginRoutes: Route[] = [
    { path: '', component: LoginComponent }
];
