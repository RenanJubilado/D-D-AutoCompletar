import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AtributosComponent } from './atributos/atributos.component';
import { PersonagemComponent } from './personagem/personagem.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { PericiasComponent } from './pericias/pericias.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AtributosComponent,
    PersonagemComponent,
    PericiasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
