import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import {ProdutoService} from '../../produto/produto.service';
import {Router} from '@angular/router';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario-criacao',
  templateUrl: './usuario-criacao.component.html',
  styleUrls: ['./usuario-criacao.component.css']
})
export class UsuarioCriacaoComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.usuarioService.createUsuario(this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.usuario = new Usuario();
    this.router.navigate(['usuarios']);
  }

  goToHome() {
    this.router.navigate([('home')]);
  }
}
