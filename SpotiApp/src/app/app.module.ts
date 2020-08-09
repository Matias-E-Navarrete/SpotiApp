import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/compartidos/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BuscarComponent } from './components/buscar/buscar.component';

// RUTAS
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// COMPONENTES
import { ArtistaComponent } from './components/artista/artista.component';
import { SpotifyService } from './services/spotify.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetaComponent } from './components/compartidos/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/compartidos/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ErroresService } from './services/errores.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    BuscarComponent,
    ArtistaComponent,
    NoimagePipe,
    TarjetaComponent,
    LoadingComponent,
    DomseguroPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true} ),
    HttpClientModule
  ],
  providers: [
    ErroresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
