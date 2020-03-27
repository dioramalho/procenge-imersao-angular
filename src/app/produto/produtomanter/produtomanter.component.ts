import { Component, OnInit } from '@angular/core';
import { Produto } from '../servico/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../servico/produto.service';

@Component({
  selector: 'app-produtomanter',
  templateUrl: './produtomanter.component.html',
  styleUrls: ['./produtomanter.component.scss']
})
export class ProdutomanterComponent implements OnInit {

  produto: Produto = new Produto();
  operacao: string = 'Incluir';
  nomeProduto: string = '';

  constructor(
    private routeActivated: ActivatedRoute,
    private produtoServico: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.nomeProduto = this.routeActivated.snapshot.params.id;
    if (this.nomeProduto != null) {
      this.operacao = 'Alterar';
      this.produtoServico.pesquisar(this.nomeProduto).subscribe(
        data => {
          this.produto = (<Produto[]>data)[0];
        }
      );
    }

  }

  incluir() {

    this.produtoServico.incluir(this.produto).subscribe(
      retorno => {
        alert(retorno['mensagem']);
        this.voltar();
      }
    );

  }

  alterar() {

    this.produtoServico.alterar(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/produto']);
      }
    );

  }

  voltar() {

    this.router.navigate(['/produto']);
    
  }

}
