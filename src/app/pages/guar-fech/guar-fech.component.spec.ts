import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarFechComponent } from './guar-fech.component';

describe('GuarFechComponent', () => {
  let component: GuarFechComponent;
  let fixture: ComponentFixture<GuarFechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuarFechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuarFechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
