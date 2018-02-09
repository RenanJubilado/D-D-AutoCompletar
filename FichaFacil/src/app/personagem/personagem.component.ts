import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tendencias: any = [
        {nome: "Leal e Bom"},
        {nome: "Neutro e Bom"},
        {nome: "Caótico e Bom"},
        {nome: "Leal e Neutro"},
        {nome: "Neutro"},
        {nome: "Caótico e Neutro"},
        {nome: "Leal e Mau"},
        {nome: "Neutro e Mau"},
        {nome: "Caótico e Mau"}
    ];

  nivel: any = [
        {exp: 0, level: 1, proficiencia: 2},
        {exp: 300, level: 2, proficiencia: 2},
        {exp: 900, level: 3, proficiencia: 2},
        {exp: 2700, level: 4, proficiencia: 2},
        {exp: 6500, level: 5, proficiencia: 3},
        {exp: 14000, level: 6, proficiencia: 3},
        {exp: 23000, level: 7, proficiencia: 3},
        {exp: 34000, level: 8, proficiencia: 3},
        {exp: 48000, level: 9, proficiencia: 4},
        {exp: 64000, level: 10, proficiencia: 4},
        {exp: 85000, level: 11, proficiencia: 4},
        {exp: 100000, level: 12, proficiencia: 4},
        {exp: 120000, level: 13, proficiencia: 5},
        {exp: 140000, level: 14, proficiencia: 5},
        {exp: 165000, level: 15, proficiencia: 5},
        {exp: 195000, level: 16, proficiencia: 5},
        {exp: 225000, level: 17, proficiencia: 6},
        {exp: 265000, level: 18, proficiencia: 6},
        {exp: 305000, level: 19, proficiencia: 6},
        {exp: 355000, level: 20, proficiencia: 6}
    ];

  opem: any = true;
  personagem: any = [];

  calcNivel(exp){
    this.nivel.forEach(element => {
      if(element.exp <= exp && exp <= 355000){
        this.personagem.nivel = element.level;
      }else if(exp>= 355000){
        this.personagem.nivel = element.level;
        this.personagem.exp = 355000;
      }
    });
  }

}
