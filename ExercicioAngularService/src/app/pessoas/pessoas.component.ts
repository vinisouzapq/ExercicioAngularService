import { Component, OnInit } from '@angular/core';
import { pessoas } from '../pessoas/pessoas.model';
import { PessoasService } from '../person.service';
 
@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoasArray: pessoas[] = [];
  pessoas: pessoas;
  detalhePessoas: boolean = false;


  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.pessoasArray = this.pessoasService.getPessoas();
    console.log(this.pessoasArray);
  }

  detalheDaPessoa(id) {
    console.log(id);
    this.detalhePessoas = true;
    this.pessoasArray.forEach(pessoa => {
      if (pessoa.id == id) {
        this.pessoas = pessoa;
      }
    })
  }
  alterarPessoa(pessoa) {
    this.pessoasArray.forEach(pessoa => {
      if (pessoa.id == pessoa.id)
        pessoa.name = pessoa.name;
    })
  }
}