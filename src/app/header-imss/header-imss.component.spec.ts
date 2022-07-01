import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImssComponent } from './header-imss.component';

describe('HeaderImssComponent', () => {
  let component: HeaderImssComponent;
  let fixture: ComponentFixture<HeaderImssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderImssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
