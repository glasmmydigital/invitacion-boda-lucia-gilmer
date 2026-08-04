import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechImgComponent } from './fech-img.component';

describe('FechImgComponent', () => {
  let component: FechImgComponent;
  let fixture: ComponentFixture<FechImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FechImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
