import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositorioListComponent } from './repositorio-list/repositorio-list.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [RepositorioListComponent],
  imports: [CommonModule, RouterLink],
})
export class RepositorioModule {}
