import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';



@NgModule({
  declarations: [
    RecuperarContrasenaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RecuperarContrasenaComponent
  ]
})
export class AuthModule { }
