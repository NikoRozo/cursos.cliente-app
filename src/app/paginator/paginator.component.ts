import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() paginador: any;

  pages: number[];

  constructor() { }

  ngOnInit(): void {
    this.pages = new Array(this.paginador.totalPages).fill(0).map(
      (valor, indice) => indice + 1
    );
  }

}
