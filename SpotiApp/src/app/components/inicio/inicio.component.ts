import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ErroresService } from '../../services/errores.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit {

  nuevosLanzamientos: any[] = [];

  loading: boolean;
  flagErrors: boolean;
  error;
  @Output() errorEvent = new EventEmitter();

  constructor(private spotify: SpotifyService, private _errorServicio: ErroresService) {

    this.loading = true;
    this.flagErrors = false;

    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevosLanzamientos = data;
      this.loading = false;
    }, (errorServicio) => {

      this.flagErrors = true;
      this.loading = false;
      this.error = this._errorServicio.getError(errorServicio.error.error.status);
    });
  }

  ngOnInit(): void {
  }

}
