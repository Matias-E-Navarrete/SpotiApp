import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

  artista: any = [];
  albums: any = [];
  topTracks: any = [];
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(
      params => {
        this.getArtista(params['id']);
        this.getAlbums(params['id']);
        this.getTopTracks(params['id']);
        this.loading = false;
      }
    );
  }

  getArtista(id: string): any {
    this.spotify.getArtista(id)
      .subscribe(artista => {
        this.artista = artista;
      });
  }
  getAlbums(id: string): any {
    this.spotify.getArtistaAlbum(id)
      .subscribe(albums => {
        this.albums = albums;
      });
  }
  getTopTracks(id: string): any {
    this.spotify.getArtistaTopTracks(id, 'US')
      .subscribe(topTracks => {
        this.topTracks = topTracks;
      });
  }

}
