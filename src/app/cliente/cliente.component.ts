import { Component, OnInit } from '@angular/core';
import { Cliente } from './servico/cliente';
import { Router } from '@angular/router';

import { ClienteService } from './servico/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  listaCliente: Cliente[] = [];
  selecionado: Cliente;

  constructor(

    private router: Router,
    private clienteServico: ClienteService

  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  incluir() {

    this.router.navigate(['/cliente/incluir/']);

  }

  alterar() {

    this.router.navigate(['/cliente/alterar/' + this.selecionado.nome])

  }

  remover() {

    this.clienteServico.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );

  }

  pesquisar() {

    this.clienteServico.pesquisar(this.cliente.nome).subscribe(
      retorno => {
        this.listaCliente = <Cliente[]>retorno;
      }

    );
      // console.log(this.listaCliente);
  }

  selecionar(valor) {

    this.selecionado = valor;

  }
}
