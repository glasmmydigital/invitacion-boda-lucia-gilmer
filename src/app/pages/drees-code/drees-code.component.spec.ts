import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreesCodeComponent } from './drees-code.component';

describe('DreesCodeComponent', () => {
  let component: DreesCodeComponent;
  let fixture: ComponentFixture<DreesCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreesCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreesCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
