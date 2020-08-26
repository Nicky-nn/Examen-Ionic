import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dado1: Number;
  dado2: Number;
  dado3: Number;
  dado4: Number;
  resultado: string;
  constructor() {}

  imagen = ['https://i.giphy.com/media/97e6IX0kayYTK/giphy.webp'];

  random() {

    this.dado1 = Math.floor(Math.random() * 3) + 1;
    this.dado2 = Math.floor(Math.random() * 3) + 1;
    this.dado3 = Math.floor(Math.random() * 3) + 1;
    this.dado4 = Math.floor(Math.random() * 3) + 1;

    if(this.dado1 === this.dado2 && this.dado2 === this.dado3 && this.dado3 === this.dado4){
      this.resultado = 'Ganaste';
    }
    else{
      this.resultado = 'Perdiste'
    }
  }
}
