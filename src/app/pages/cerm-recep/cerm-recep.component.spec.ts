import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CermRecepComponent } from './cerm-recep.component';

describe('CermRecepComponent', () => {
  let component: CermRecepComponent;
  let fixture: ComponentFixture<CermRecepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CermRecepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CermRecepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
