import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})

export class AtributosComponent implements OnInit {
  url: any = 'http://localhost:5984/ficha_auto/atributos';
  data: any = "";
  opem: boolean = true;
  atributos: any = [];

  constructor(private http: Http){}

  ngOnInit() {
    this.getAtributos();
  }

  receberAtributos(data: any){
    data.forEach(element =>{
      this.atributos.push(element);
    });
  };

  getAtributos(){
    this.http.get(this.url).map((res: Response) => res.json()).subscribe(data => {
      this.data = data;
      this.receberAtributos(this.data.atributos);
    });
  };

  botoes(btn: any, atr: any){
    if(btn === '-'){atr.valor --}
    else if(btn === '+'){atr.valor ++};
    this.modCalc(atr);
  };

  modCalc(atr: any){
    this.atributos.forEach(element => {
      if(atr.nome == element.nome)
      element.mod = Math.floor((atr.valor - 10)/2);
    });
  };
}
