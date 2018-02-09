import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import  PouchDB from 'pouchdb';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {
  db: any = "";
  racas: any = [];
  tendencias: any = [];
  nivel: any = [];
  personagem: any = [];
  antecedentes: any = [];

  opem: any = true;
  

  constructor() {
    this.db = new PouchDB('http://localhost:5984/ficha_auto');
  }

  ngOnInit() {
    this.listarComponentes();
  }

  subRacaChange(){
    if(this.personagem.subracas != null){
        this.personagem.subracas = null;
    }
    console.log(this.personagem);
  }

  listarComponentes(){
    this.db.get("racas").then((res)=>{
      this.racas = res.racas;
    }).catch((err)=>{
      console.log(err);
    });

    this.db.get("tendencias").then((res)=>{
      this.tendencias = res.tendencias
    }).catch((err)=>{
      console.log(err);
    });

    this.db.get("niveis").then((res)=>{
      this.nivel = res.nivel;
    }).catch((err)=>{
      console.log(err);
    });

    this.db.get("antecedentes").then((res)=>{
      this.antecedentes = res.antecedentes;
    }).catch((err)=>{
      console.log(err);
    });
  };

  calcNivel(exp){
    this.nivel.forEach(element => {
      if(element.exp <= exp && exp <= 355000){
        this.personagem.nivel = element;
      }else if(exp>= 355000){
        this.personagem.nivel = element;
        this.personagem.exp = 355000;
      }
    });
  }

}
