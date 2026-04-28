import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';

/*const routes: Routes = [
  { path: '', pathMatch: 'full', children: [] },
  { path: 'usuarios', component: UsuarioListComponent },
];*/

const routes: Routes = [
  // Carga el módulo, no el componente
  {
    path: 'usuarios',
    loadChildren: () => import('./usuario/usuario.module').then((m) => m.UsuarioModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


