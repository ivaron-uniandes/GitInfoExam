import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositorioListComponent } from './repositorio-list/repositorio-list.component';
import { RouterLink } from '@angular/router';
import { RepositorioDetailComponent } from './repositorio-detail/repositorio-detail.component';

@NgModule({
  declarations: [RepositorioListComponent, RepositorioDetailComponent],
  imports: [CommonModule, RouterLink],
})
export class RepositorioModule {}
