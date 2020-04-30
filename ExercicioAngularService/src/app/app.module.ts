import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasDetalheComponent } from './pessoas-detalhe/pessoas-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    PessoasDetalheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
