import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirAsistenComponent } from './confir-asisten.component';

describe('ConfirAsistenComponent', () => {
  let component: ConfirAsistenComponent;
  let fixture: ComponentFixture<ConfirAsistenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirAsistenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirAsistenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
