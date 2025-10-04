import { Routes } from '@angular/router';
import { StartComponent } from './views/start/start.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
];
