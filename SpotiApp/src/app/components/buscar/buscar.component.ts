import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {

  artistas: any[] = [];
  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscarArtista(termino: string) {
    this.spotify.getArtists(termino)
      .subscribe((data: any) => {
        this.artistas = data;
        console.log(this.artistas);
      });
  }

}
