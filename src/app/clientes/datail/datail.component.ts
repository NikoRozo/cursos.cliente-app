import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ModalService } from './modal.service';
import swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-datail-client',
  templateUrl: './datail.component.html',
  styleUrls: ['./datail.component.css']
})
export class DatailComponent implements OnInit {
  title = 'Detalle del Cliente';

  @Input() cliente: Cliente;

  fotoSelect: File;
  progreso = 0;

  constructor(private clienteService: ClienteService,
              public modalService: ModalService) { }

  ngOnInit(): void {
  }

  selectFoto(event): void{
    this.fotoSelect = event.target.files[0];
    this.progreso = 0;
    console.log(this.fotoSelect);
    if (this.fotoSelect.type.indexOf('image') < 0) {
      this.fotoSelect = null;
      swal.fire('Error Foto Cargada',  'El archivo debe ser una imagen',  'error');
    }
  }

  subirFoto(): void {
    if (!this.fotoSelect) {
      swal.fire('Error Foto Cargada',  'Debe Seleccionar una Foto',  'error');
    }else{
      this.clienteService.subirFoto(this.fotoSelect, this.cliente.id)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progreso = Math.round((event.loaded / event.total) * 100);
        } else if (event.type === HttpEventType.Response) {
          const response: any = event.body;

          this.cliente = response.cliente as Cliente;

          this.modalService.notificarUpload.emit(this.cliente);

          swal.fire('Foto Cargada', response.mensaje,  'success');
        }
      });
    }
  }

  cerrarModal(): void {
    this.modalService.cerrarModal();

    this.fotoSelect = null;
    this.progreso = 0;
  }
}
