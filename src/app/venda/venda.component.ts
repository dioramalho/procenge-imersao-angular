import { Component, OnInit } from '@angular/core';
import { Venda } from './servico/venda';
import { Cliente } from '../cliente/servico/cliente';
import { Router } from '@angular/router';
import { VendaService } from './servico/venda.service';
import { ClienteService } from '../cliente/servico/cliente.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {

  venda: Venda = new Venda();
  listaVenda: Venda[] = [];
  listaCliente: Cliente[] = [];
  selecionado: Venda;

  constructor(
    private router: Router,
    private vendaServico: VendaService,
    private clienteServico: ClienteService
  ) { }

  ngOnInit(): void {

    this.pesquisarVenda();
    this.pesquisarCliente();
    
  }

  incluir(){

    this.router.navigate(['/venda/incluir/']);
  
  }

  pesquisarVenda(){

    let codigoCliente = '';
    if(this.venda.cliente != null){
      codigoCliente = this.venda.cliente.codigo;
    }

    this.vendaServico.pesquisar(codigoCliente).subscribe(
      retorno => {
        this.listaVenda = <Venda[]> retorno;
      }
    );
  } 

  pesquisarCliente(){
    this.clienteServico.pesquisar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );
  }
  
  // Relacionado ao radio buttom
  selecionar(valor){
    this.selecionado = valor;    
  }

  remover(){

    this.vendaServico.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );

  }

}
