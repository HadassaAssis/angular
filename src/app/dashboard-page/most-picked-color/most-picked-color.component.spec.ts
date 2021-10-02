import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPickedColorComponent } from './most-picked-color.component';

describe('MostPickedColorComponent', () => {
  let component: MostPickedColorComponent;
  let fixture: ComponentFixture<MostPickedColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPickedColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPickedColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
