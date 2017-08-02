import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/input', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(APP_ROUTES);