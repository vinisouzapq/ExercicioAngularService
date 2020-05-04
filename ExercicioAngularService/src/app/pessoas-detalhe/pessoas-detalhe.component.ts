import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pessoas } from '../pessoas/pessoas.model';

@Component({
  selector: 'app-pessoas-detalhes',
  templateUrl: './pessoas-detalhes.component.html',
  styleUrls: ['./pessoas-detalhes.component.css']
})


export class PessoasDetalhesComponent implements OnInit {

  @Input() detalhe;
  @Input() pessoa: Pessoas;
  @Output() NovaPessoa = new EventEmitter();

  Person: Pessoas;


  constructor() { }

  confirmarDados(nome, idade, corOlhos, sexo, email) {
    this.Person = { id: this.pessoa.id, name: nome, idade: idade, corOlhos: corOlhos, sexo: sexo, email: email }
    this.NovaPessoa.emit(this.Person);

  }
  atualizarDados() {
    document.getElementById("invisible").style.display = "block";
  }
  ngOnInit(): void {
  }

}