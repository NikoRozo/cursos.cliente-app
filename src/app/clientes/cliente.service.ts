import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Clientes } from '../../assets/data/clientes.json';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Cliente[] {
    return Clientes;
  }
}
