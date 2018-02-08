import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-pericias',
  templateUrl: './pericias.component.html',
  styleUrls: ['./pericias.component.css']
})

export class PericiasComponent implements OnInit {
url: any = 'http://localhost:5984/ficha_auto/pericias';
  data: any = "";
  opem: boolean = true;
  pericias: any = [];

  constructor(private http: Http){}

  ngOnInit() {
    this.getPericias();
  }

  receberPericias(data: any){
    data.forEach(element =>{
      this.pericias.push(element);
    });
  };

  getPericias(){
    this.http.get(this.url).map((res: Response) => res.json()).subscribe(data => {
      this.data = data;
      console.log(data.pericias);
      this.receberPericias(this.data.pericias);
    });
  };
  
}
