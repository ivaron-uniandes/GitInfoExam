import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario.model';
import { UsuarioListService } from '../usuario-list.service';



@Component({
  selector: 'app-usuario-list',
  standalone: false,
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css',
})
export class UsuarioListComponent implements OnInit {
  constructor(
    private usuarioListService: UsuarioListService,
    private cdr: ChangeDetectorRef,
  ) {}

  usuarios: Usuario[] = [];
  usuarioSeleccionado: any = null;
  pageSize = 8;
  currentPage = 1;

  getUsuariosList() {
    this.usuarioListService.getUsuarios().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      this.currentPage = 1;
      console.log(usuarios);
      this.cdr.detectChanges();
    });
  }

  get pagedUsuarios(): Usuario[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.usuarios.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.usuarios.length / this.pageSize));
  }

  goToPage(page: number): void {
    console.log(page);
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }

  seleccionado(usuario: any): void {
    this.usuarioSeleccionado = usuario;
    console.log("Registro seleccionado ->", usuario);
  }

  ngOnInit(): void {
    console.log("Reinicio");
    this.getUsuariosList();
  }

  protected readonly alert = alert;
}
