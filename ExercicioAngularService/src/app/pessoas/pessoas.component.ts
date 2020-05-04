import { Component, OnInit } from '@angular/core';
import { Pessoas } from './pessoas.model'; 
import { PessoasService } from '../pessoas.service';
@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {




  constructor(private pessoasService: PessoasService) {
  }

  ngOnInit(): void {
    this.pessoasArray = this.pessoasService.getPessoas();
    console.log(this.pessoasArray);
  }


  pessoasArray: Pessoas[] = [];
  pessoa: Pessoas;
  detalhePessoa: boolean = false;

  alterarPessoas(_pessoas) {
    this.pessoasService.alterarPessoas(_pessoas);
  }


  detalheDaPessoa(pessoas) {
    console.log(pessoas);
    this.detalhePessoa = true;
    this.pessoa = pessoas;
  }

  getPessoas(id) {
    this.pessoasArray.forEach(pessoa => {
      if (pessoa.id == id) {
        return pessoa;
      }
    })
  }


}