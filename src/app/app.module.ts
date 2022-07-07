import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderImssComponent } from './header-imss/header-imss.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardModule } from './shared/card/card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EjemplosPropiedadesCssComponent } from './shared/ejemplos-propiedades-css/ejemplos-propiedades-css.component';
import { NavBootstrapComponent } from './shared/nav-bootstrap/nav-bootstrap.component';
import { TooltipComponent } from './shared/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderImssComponent,
    InicioSesionComponent,
    HomeComponent,
    EjemplosPropiedadesCssComponent,
    NavBootstrapComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
