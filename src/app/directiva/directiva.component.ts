import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  listCursos: string[] = ['typeScrip', 'Javascript', 'Java SE', 'C#', 'AWS'];
  enable = true;

  constructor() { }

  setEnable(): void {
    this.enable = (this.enable === true) ? false : true;
  }
}
