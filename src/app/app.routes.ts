import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';

export const routes: Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'contenido' , component : ContenidoComponent },
];
