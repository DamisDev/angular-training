
import { Routes } from '@angular/router';

export const routes: Routes = [
  // con loadComponent: () => import('...').then(m => m. ...) utilizziamo il lazy loading del componente in questione
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then(m => m.AboutComponent)
  },
  {
    path: 'form',
    loadComponent: () => import('./signal-form/signal-form').then(m => m.SignalFormComponent)
  }
];
