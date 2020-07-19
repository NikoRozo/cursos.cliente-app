import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = 'Crear Cliente';
  cliente: Cliente = new Cliente();
  constructor(private clienteService: ClienteService,
              private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes']);
        swal.fire(  'Nuevo Cliente',  `Cliente ${cliente.nombre} ${cliente.apellido} creado con éxito!`,  'success');
      }
    );
  }

}
