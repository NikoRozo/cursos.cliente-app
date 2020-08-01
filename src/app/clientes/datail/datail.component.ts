import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-datail-client',
  templateUrl: './datail.component.html',
  styleUrls: ['./datail.component.css']
})
export class DatailComponent implements OnInit {
  title = 'Detalle del Cliente';

  cliente: Cliente;

  private fotoSelect: File;

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

  selectFoto(event): void{
    this.fotoSelect = event.target.files[0];
    console.log(this.fotoSelect);
  }

  subirFoto(): void{
    this.clienteService.subirFoto(this.fotoSelect, this.cliente.id)
    .subscribe(cliente => {
      this.cliente = cliente;
      swal.fire('Foto Cargada',  `La Foto de Perdil de ${cliente.nombre} ${cliente.apellido} fue cargada con éxito!`,  'success');
    });
  }
}
