import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegImgFloresComponent } from './seg-img-flores.component';

describe('SegImgFloresComponent', () => {
  let component: SegImgFloresComponent;
  let fixture: ComponentFixture<SegImgFloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegImgFloresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegImgFloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
