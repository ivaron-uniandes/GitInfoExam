import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../../usuario/modelos/usuario.model';
import { UsuarioListService } from '../../usuario/usuario-list.service';

@Component({
  selector: 'app-repositorio-detail',
  standalone: false,
  templateUrl: './repositorio-detail.component.html',
  styleUrl: './repositorio-detail.component.css',
})
export class RepositorioDetailComponent implements OnInit {
  @Input() repositorio: any;
  @Output() volver = new EventEmitter<void>();

  constructor() {}

  regresar() {
    this.volver.emit();
  }
  ngOnInit(): void {
    console.log('Cargo detalle');
  }
}
