import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
})
export class TarjetaComponent implements OnInit {



  constructor(private router: Router) { }

  @Input() items: any[] = [];

  ngOnInit(): void {
  }


  verArtista(item: any) {
    let artistaId;

    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    return this.router.navigate([ '/artista', artistaId ]);

  }

}
