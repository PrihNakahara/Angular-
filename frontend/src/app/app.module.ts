import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProdutoListaComponent } from './produto/produto-lista/produto-lista.component';
import { ProdutoDetalhesComponent } from './produto/produto-detalhes/produto-detalhes.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { UsuarioEditarComponent } from './usuario/usuario-editar/usuario-editar.component';
import { ProdutoEditarComponent } from './produto/produto-editar/produto-editar.component';
import { UsuarioDetalhesComponent } from './usuario/usuario-detalhes/usuario-detalhes.component';
import { UsuarioCriacaoComponent } from './usuario/usuario-criacao/usuario-criacao.component';
import { HomeComponent } from './home/home.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { ProdutoAnuncieComponent } from './produto/produto-anuncie/produto-anuncie.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListaComponent,
    ProdutoDetalhesComponent,
    RegistroComponent,
    FooterComponent,
    HeaderComponent,
    UsuarioEditarComponent,
    ProdutoEditarComponent,
    UsuarioDetalhesComponent,
    UsuarioCriacaoComponent,
    HomeComponent,
    QuemsomosComponent,
    ProdutoAnuncieComponent,
    LoginComponent,
    CarrinhoComponent,
    PagamentoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
