import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ErroresService {

  private error: Error[] = [
    {
      codigo: 400,
      mensaje: 'Bad Request'
    },
    {
      codigo: 401,
      mensaje: 'The access token expired'
    },
    {
      codigo: 403,
      mensaje: 'Forbidden'
    },
    {
      codigo: 404,
      mensaje: 'Not Found'
    },
    {
      codigo: 405,
      mensaje: 'Method Not Allowed'
    },
    {
      codigo: 406,
      mensaje: 'Not Acceptable'
    },
    {
      codigo: 407,
      mensaje: 'Proxy Authentication Required'
    },
    {
      codigo: 408,
      mensaje: 'Request Timeout'
    },
    {
      codigo: 500,
      mensaje: 'Internal Server Error'
    },
    {
      codigo: 501,
      mensaje: 'Not Implemented'
    },
    {
      codigo: 502,
      mensaje: 'Bad Gateway'
    },
    {
      codigo: 504,
      mensaje: 'Gateway Timeout'
    },
  ];

  getError(codigo: number): any {
    for (const i of this.error) {
      if (i.codigo === codigo) {
        return i;
      }
    }
  }

}

export interface Error {
  codigo: number;
  mensaje: string;
}
