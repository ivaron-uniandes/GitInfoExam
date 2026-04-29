import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Repositorio } from '../modelos/repositorio.model';
import { RepositorioListService } from '../repositorio-list.service';

@Component({
  selector: 'app-repositorio-list',
  standalone: false,
  templateUrl: './repositorio-list.component.html',
  styleUrl: './repositorio-list.component.css',
})
export class RepositorioListComponent implements OnInit {
  constructor(
    private repositorioListService: RepositorioListService,
    private cdr: ChangeDetectorRef,
  ) {}

  imagenEstatica = 'src/assets/gitlogo.jpg';
  repositorios: Repositorio[] = [];
  pageSize = 8;
  currentPage = 1;

  getRepositoriosList() {
    this.repositorioListService.getRepositorios().subscribe((repositorios: Repositorio[]) => {
      this.repositorios = repositorios;
      this.currentPage = 1;
      console.log(repositorios);
      this.cdr.detectChanges();
    });
  }

  get pagedRepositorios(): Repositorio[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.repositorios.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.repositorios.length / this.pageSize));
  }

  goToPage(page: number): void {
    console.log(page);
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }

  ngOnInit(): void {
    this.getRepositoriosList();
  }
}
