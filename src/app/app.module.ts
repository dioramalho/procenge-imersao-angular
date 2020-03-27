import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { ClienteService } from './cliente/servico/cliente.service';
import { LayoutComponent } from './layout/layout.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { ProdutomanterComponent } from './produto/produtomanter/produtomanter.component';
import { ProdutoService } from './produto/servico/produto.service';
import { VendamanterComponent } from './venda/vendamanter/vendamanter.component';
import { VendaService } from './venda/servico/venda.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClientemanterComponent,
    LayoutComponent,
    ProdutoComponent,
    VendaComponent,
    ProdutomanterComponent,
    VendamanterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClienteService,
    ProdutoService,
    VendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
