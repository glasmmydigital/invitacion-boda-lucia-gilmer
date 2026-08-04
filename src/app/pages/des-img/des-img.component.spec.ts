import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesImgComponent } from './des-img.component';

describe('DesImgComponent', () => {
  let component: DesImgComponent;
  let fixture: ComponentFixture<DesImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
