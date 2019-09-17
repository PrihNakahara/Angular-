import { Component, OnInit } from '@angular/core';
import {Produto} from '../produto';
import {ProdutoService} from '../produto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produto-anuncie',
  templateUrl: './produto-anuncie.component.html',
  styleUrls: ['./produto-anuncie.component.css']
})
export class ProdutoAnuncieComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.produtoService.createProduto(this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
    this.router.navigate(['produtos']);
  }

  goToHome() {
    this.router.navigate([('home')]);
  }

}
