import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UsuarioModule } from './usuario/usuario.module';
import { RepositorioModule } from './repositorio/repositorio-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, RepositorioModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
