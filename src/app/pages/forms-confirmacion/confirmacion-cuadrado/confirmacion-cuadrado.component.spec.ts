import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionCuadradoComponent } from './confirmacion-cuadrado.component';

describe('ConfirmacionCuadradoComponent', () => {
  let component: ConfirmacionCuadradoComponent;
  let fixture: ComponentFixture<ConfirmacionCuadradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionCuadradoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacionCuadradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
