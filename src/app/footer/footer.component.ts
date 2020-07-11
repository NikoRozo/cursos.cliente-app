import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  author: any = {nombre: 'Nicolás E.', apellido: 'Rozo E.'};

  ngOnInit(): void {
  }

}
