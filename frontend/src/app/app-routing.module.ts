import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProdutoListaComponent} from './produto/produto-lista/produto-lista.component';
import {QuemsomosComponent} from './quemsomos/quemsomos.component';
import {UsuarioCriacaoComponent} from './usuario/usuario-criacao/usuario-criacao.component';
import {ProdutoAnuncieComponent} from './produto/produto-anuncie/produto-anuncie.component';
import {LoginComponent} from './login/login.component';
import {ProdutoDetalhesComponent} from './produto/produto-detalhes/produto-detalhes.component';
import {PagamentoComponent} from './pagamento/pagamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'produtos',
    component: ProdutoListaComponent
  },
  {
    path: 'quemSomos',
    component: QuemsomosComponent
  },
  {
    path: 'criacao',
    component: UsuarioCriacaoComponent
  },
  {
    path: 'anuncie',
    component: ProdutoAnuncieComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'usuarios',
    component: UsuarioCriacaoComponent
  },
  {
    path: 'produto-detalhes',
    component: ProdutoDetalhesComponent
  },
  {
    path: 'pagamento',
    component: PagamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
