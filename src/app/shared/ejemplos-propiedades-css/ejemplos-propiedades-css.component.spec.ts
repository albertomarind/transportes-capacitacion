import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosPropiedadesCssComponent } from './ejemplos-propiedades-css.component';

describe('EjemplosPropiedadesCssComponent', () => {
  let component: EjemplosPropiedadesCssComponent;
  let fixture: ComponentFixture<EjemplosPropiedadesCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplosPropiedadesCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplosPropiedadesCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
