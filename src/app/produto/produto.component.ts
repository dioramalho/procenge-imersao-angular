import { Component, OnInit } from '@angular/core';
import { Produto } from './servico/produto';
import { Router } from '@angular/router';
import { ProdutoService } from './servico/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  listaProduto: Produto[] = [];
  selecionado: Produto;

  constructor(

    private router: Router,
    private produtoServico: ProdutoService

  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  incluir() {

    this.router.navigate(['/produto/incluir/']);

  }

  alterar(){

    this.router.navigate(['/produto/alterar/' + this.selecionado.nome]);  
  
  }

  remover(){

    this.produtoServico.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );

  }

  pesquisar(){
  
    this.produtoServico.pesquisar(this.produto.nome).subscribe(
      data =>{
        this.listaProduto = <Produto[]>data;
      }
    );
  
  }

  selecionar(valor){

    this.selecionado = valor;

  }

}
