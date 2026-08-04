import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFloresComponent } from './img-flores.component';

describe('ImgFloresComponent', () => {
  let component: ImgFloresComponent;
  let fixture: ComponentFixture<ImgFloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgFloresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgFloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
