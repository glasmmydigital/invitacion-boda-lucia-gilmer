import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomPadresComponent } from './nom-padres.component';

describe('NomPadresComponent', () => {
  let component: NomPadresComponent;
  let fixture: ComponentFixture<NomPadresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomPadresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomPadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
