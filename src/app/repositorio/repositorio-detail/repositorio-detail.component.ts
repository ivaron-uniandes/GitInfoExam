import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../../usuario/modelos/usuario.model';
import { UsuarioListService } from '../../usuario/usuario-list.service';
import { Repositorio } from '../modelos/repositorio.model';
import { RepositorioListService } from '../repositorio-list.service';

@Component({
  selector: 'app-repositorio-detail',
  standalone: false,
  templateUrl: './repositorio-detail.component.html',
  styleUrl: './repositorio-detail.component.css',
})
export class RepositorioDetailComponent implements OnInit {
  @Input() repositorio: any;
  @Output() volver = new EventEmitter<void>();
  usuarios: Usuario[] = [];

  constructor(
    private usuarioListService: UsuarioListService,
    private cdr: ChangeDetectorRef,
  ) {}

  regresar() {
    this.volver.emit();
  }

  ngOnInit(): void {
    console.log('Cargo detalle detalle repositorio');
    if (this.repositorio) {
      console.log('Cargado detalle');
      this.getUsuariosListForRepositorio();
    }
  }

  getUsuariosListForRepositorio(): void {
    this.usuarioListService.getUsuarios().subscribe((usuarios: Usuario[]) => {
      // Creamos la nueva lista con los que coinciden
      this.usuarios = usuarios.filter((usr) => usr.id === this.repositorio.ownerId);
      this.cdr.detectChanges();
      console.log('Usuarios extraídos:', this.usuarios);
    });
  }
}
