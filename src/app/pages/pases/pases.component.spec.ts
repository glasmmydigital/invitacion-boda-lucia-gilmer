import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasesComponent } from './pases.component';

describe('PasesComponent', () => {
  let component: PasesComponent;
  let fixture: ComponentFixture<PasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
