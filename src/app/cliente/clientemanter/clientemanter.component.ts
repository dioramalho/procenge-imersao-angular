import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../servico/cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-clientemanter',
  templateUrl: './clientemanter.component.html',
  styleUrls: ['./clientemanter.component.scss']
})
export class ClientemanterComponent implements OnInit {

  nomeCliente: string = '';
  operacao: string = 'Incluir';
  cliente: Cliente = new Cliente();

  constructor(
    private routeActivated: ActivatedRoute,
    private clienteServico: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.nomeCliente = this.routeActivated.snapshot.params.id;
    if (this.nomeCliente != null) {
      this.operacao = 'Alterar';
      this.clienteServico.pesquisar(this.nomeCliente).subscribe(
        data => {
          this.cliente = (<Cliente[]>data)[0];
        }
      );
    }

  }

  incluir() {

    this.clienteServico.incluir(this.cliente).subscribe(
      retorno => {
        alert(retorno['mensagem']);
        this.voltar();
      }
    );

  }

  alterar() {

    this.clienteServico.alterar(this.cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/cliente']);
      }
    );

  }

  voltar() {
    this.router.navigate(['/cliente']);
  }


}
