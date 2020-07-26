import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/compartidos/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BuscarComponent } from './components/buscar/buscar.component';

// RUTAS
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ArtistaComponent } from './components/artista/artista.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    BuscarComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
