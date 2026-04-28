import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: UsuarioListComponent }];
@NgModule({
  declarations: [UsuarioListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [UsuarioListComponent],
})
export class UsuarioModule {}
