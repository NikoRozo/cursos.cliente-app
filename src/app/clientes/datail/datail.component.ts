import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datail-client',
  templateUrl: './datail.component.html',
  styleUrls: ['./datail.component.css']
})
export class DatailComponent implements OnInit {
  title = 'Detalle del Cliente';

  cliente: Cliente;

  constructor(private clienteService: ClienteService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      const id: number = +params.get('id');

      if (id) {
        this.clienteService.getCliente(id).subscribe(cliente => {
          this.cliente = cliente;
        });
      }
    });
  }

}
