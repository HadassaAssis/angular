import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostVisitorCityComponent } from './most-visitor-city.component';

describe('MostVisitorCityComponent', () => {
  let component: MostVisitorCityComponent;
  let fixture: ComponentFixture<MostVisitorCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostVisitorCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostVisitorCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
