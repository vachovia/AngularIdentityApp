import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components';

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./account/account.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./account/account.routes').then((m) => m.loginRoutes),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then((m) => m.routes),
  },
  {
    path: 'play',
    loadChildren: () =>
      import('./play/play.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./shared/components/errors/not-found/notFound.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];
