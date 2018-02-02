import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.atributos.forEach(element => {
      element.modificador = Math.floor((element.valor - 10)/2);
    });
  }

  opem: boolean = false;
  atributos: any = [
    {atributo: 'FOR', valor: 10},
    {atributo: 'DEX', valor: 10},
    {atributo: 'CON', valor: 10},
    {atributo: 'INT', valor: 10},
    {atributo: 'SAB', valor: 10},
    {atributo: 'CAR', valor: 10}
  ];
  
  botoes(btn: any, atr: any){
    if(btn === '-'){atr.valor --}
    else if(btn === '+'){atr.valor ++};
    this.modCalc(atr);
  };

  modCalc(atr: any){
    this.atributos.forEach(element => {
      if(atr.atributo == element.atributo)
      element.modificador = Math.floor((atr.valor - 10)/2);
    });
  };

}
