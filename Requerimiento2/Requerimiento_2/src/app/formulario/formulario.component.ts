import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public usuarios: Array<Usuario>;
  user: String = "";
  pass: String = "";
  isCorrectLogin: Boolean = true;

  constructor() {
    this.usuarios = [
      new Usuario('spinelf', '12345'),
      new Usuario('souldeep', '12345')
    ];
  }

  public comprobarUsuario(usuario: Usuario) {
    this.isCorrectLogin = !this.usuarios.findIndex((user: Usuario) => user.nombre === usuario.nombre && user.password === usuario.password)
  }

  ngOnInit() {
  }

}


