import { Component, OnInit } from '@angular/core';
import {Produto} from '../produto/produto';
import {ProdutoService} from '../produto/produto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['pagamento']);
  }

}
