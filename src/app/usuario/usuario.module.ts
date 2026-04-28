import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsuarioListComponent],
  imports: [CommonModule, RouterModule],
  exports: [UsuarioListComponent],
})
export class UsuarioModule {}
