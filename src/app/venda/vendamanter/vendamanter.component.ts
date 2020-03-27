import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Venda } from '../servico/venda';
import { VendaItem } from '../servico/vendaItem';
import { Produto } from 'src/app/produto/servico/produto';
import { Cliente } from 'src/app/cliente/servico/cliente';
import { VendaService } from '../servico/venda.service';
import { ProdutoService } from 'src/app/produto/servico/produto.service';
import { ClienteService } from 'src/app/cliente/servico/cliente.service';

@Component({
  selector: 'app-vendamanter',
  templateUrl: './vendamanter.component.html',
  styleUrls: ['./vendamanter.component.scss']
})
export class VendamanterComponent implements OnInit {

  operacao: string = 'Incluir';
  venda: Venda = new Venda();
  vendaItem: VendaItem = new VendaItem();
  listaProduto: Produto[] = [];
  listaCliente: Cliente[] = [];

  constructor(

    private router: Router,
    private vendaService: VendaService,
    private produtoService: ProdutoService,
    private clienteService: ClienteService

  ) { }

  ngOnInit(): void {

    this.pesquisarCliente();
    this.pesquisarProduto();
  }

  pesquisarCliente() {

    this.clienteService.pesquisar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );

  }

  pesquisarProduto() {

    this.produtoService.pesquisar('').subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
      }
    );

  }

  incluir() {

    this.vendaService.incluir(this.venda).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/venda']);
      }
    );

  }

  adicionar() {

    this.gerarCodgoParaItemProduto();

    this.venda.listaVendaItem.push(this.vendaItem);
    this.vendaItem = new VendaItem();

  }

  gerarCodgoParaItemProduto() {

    let codigoItem = <number>this.venda.listaVendaItem.length + 1;
    this.vendaItem.codigo = codigoItem;

  }

  removerproduto(produto) {

    this.venda.listaVendaItem = this.venda.listaVendaItem.filter(obj => obj !== produto);

  }

  voltar() {

    this.router.navigate(['/venda']);

  }

}
