import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import  PouchDB from 'pouchdb';

@Component({
  selector: 'app-pericias',
  templateUrl: './pericias.component.html',
  styleUrls: ['./pericias.component.css']
})

export class PericiasComponent implements OnInit {
  opem: boolean = true;
  pericias: any = [];
  db: any = "";

  constructor(){
    this.db = new PouchDB('http://localhost:5984/ficha_auto');
  }

  ngOnInit() {
    this.listarPericias();
  }

  atualizarPericias(){
    this.db.get('pericias').then((doc) => {
      return this.db.put({_id: 'pericias', _rev: doc._rev, pericias: this.pericias});
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  };

  listarPericias(){
    this.db.get('pericias').then((doc) => {
      this.pericias = doc.pericias;
    }).catch((err) => {
      console.log(err);
    });
  }

  setPericiaTreinada(pericia){
    this.pericias.forEach(element => {
      if(element.nome == pericia.nome){
        let aux: boolean = pericia.treinada;
        pericia.treinada = !aux;
      }
    });
  };  
}
