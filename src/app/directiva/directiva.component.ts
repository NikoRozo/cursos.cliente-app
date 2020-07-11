import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  listCursos: string[] = ['typeScrip', 'Javascript', 'Java SE', 'C#', 'AWS'];

  constructor() { }

}
