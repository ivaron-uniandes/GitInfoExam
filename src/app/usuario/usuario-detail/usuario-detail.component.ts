import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Usuario } from '../modelos/usuario.model';
import { ActivatedRoute } from '@angular/router';
import { UsuarioListService } from '../usuario-list.service';
import { Repositorio } from '../../repositorio/modelos/repositorio.model';
import { RepositorioListService } from '../../repositorio/repositorio-list.service';

@Component({
  selector: 'app-usuario-detail',
  standalone: false,
  templateUrl: './usuario-detail.component.html',
  styleUrl: './usuario-detail.component.css',
})
export class UsuarioDetailComponent implements OnInit {
  @Input() usuario: any;
  @Output() volver = new EventEmitter<void>();
  usuarioRepositorios: Repositorio[] = [];
  usuarios: Usuario[] = [];

  constructor(
    private repositorioListService: RepositorioListService,
    private cdr: ChangeDetectorRef,
  ) {}

  regresar() {
    this.volver.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['usuario'] && this.usuario) {
      this.getRepositoriosListForUsuarios();
    }
  }

  ngOnInit(): void {
    console.log('Cargo detalle');
    if (this.usuario) {
      console.log('Cargado detalle');
      this.getRepositoriosListForUsuarios();
    }
  }
  getRepositoriosListForUsuarios(): void {
    this.repositorioListService.getRepositorios().subscribe((repositorios: Repositorio[]) => {
      // Creamos la nueva lista con los que coinciden
      this.usuarioRepositorios = repositorios.filter((repo) =>
        this.usuario.repoIds.includes(repo.id),
      );
      this.cdr.detectChanges();
      console.log('Repositorios extraídos:', this.usuarioRepositorios);
    });
  }
}

