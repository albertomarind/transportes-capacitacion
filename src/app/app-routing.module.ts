import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { EjemplosPropiedadesCssComponent } from './shared/ejemplos-propiedades-css/ejemplos-propiedades-css.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'inicio-sesion', component: InicioSesionComponent
  },
  {
    path: 'ejemplos-css', component:EjemplosPropiedadesCssComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
