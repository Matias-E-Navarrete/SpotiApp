import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string): any {

    const headers = new HttpHeaders(
      {
        Authorization: 'Bearer BQCdVYRnk0khqoi__duBItObLKzfQL-DmEMfmPNRyLwnCbYsTVfykLxctzFamPwJBALGTzvXWl3IGt05Pzk'
      }
    );

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers });
  }

  getNewReleases(): any {

    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtists(termino: string): any {
    return this.getQuery(`search?q=${termino}&type=artist&limit=12`)
      .pipe(map(data => data['artists'].items));
  }


  getArtista(id: string): any {
    return this.getQuery(`artists/${id}`);
  }

  getArtistaAlbum(id: string): any {
    return this.getQuery(`artists/${id}/albums`)
      .pipe(map(albums => albums['items']));
  }
  getArtistaTopTracks(id: string, pais: string): any {
    return this.getQuery(`artists/${id}/top-tracks?country=${pais}`)
      .pipe(map(tracks => tracks['tracks']));
  }

}
