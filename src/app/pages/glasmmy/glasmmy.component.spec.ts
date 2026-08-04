import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlasmmyComponent } from './glasmmy.component';

describe('GlasmmyComponent', () => {
  let component: GlasmmyComponent;
  let fixture: ComponentFixture<GlasmmyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlasmmyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlasmmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
