import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../modelos/usuario.model';
import { ActivatedRoute } from '@angular/router';
import { UsuarioListService } from '../usuario-list.service';
import { Repositorio } from '../../repositorio/modelos/repositorio.model';

@Component({
  selector: 'app-usuario-detail',
  standalone: false,
  templateUrl: './usuario-detail.component.html',
  styleUrl: './usuario-detail.component.css',
})
export class UsuarioDetailComponent implements OnInit {
  @Input() usuario: any;
  @Output() volver = new EventEmitter<void>();

  usuarios: Usuario[] = [];

  constructor(private usuarioListService: UsuarioListService) {}


  regresar() {
    this.volver.emit();
  }

  ngOnInit(): void {
    console.log('Cargo detalle');
    this.loadUsuario('');
  }

  loadUsuario(id: string): void {
    this.usuarioListService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }
}

