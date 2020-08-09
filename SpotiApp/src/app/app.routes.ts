import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ArtistaComponent } from './components/artista/artista.component';


export const ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: 'artista/:id', component: ArtistaComponent},
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];
