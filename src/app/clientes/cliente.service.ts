import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Clientes } from '../../assets/data/clientes.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]> {
    return of(Clientes);
  }
}
