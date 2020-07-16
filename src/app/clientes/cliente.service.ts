import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Clientes } from '../../assets/data/clientes.json';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // private urlEndPoint = 'http://localhost:8090/api/v1/clients';
  private urlEndPoint = 'http://localhost:53760/';
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    // return of(Clientes); // Consulta los Datos Estaticos
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }
}
