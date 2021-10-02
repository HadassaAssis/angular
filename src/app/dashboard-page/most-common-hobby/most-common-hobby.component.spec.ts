import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostCommonHobbyComponent } from './most-common-hobby.component';

describe('MostCommonHobbyComponent', () => {
  let component: MostCommonHobbyComponent;
  let fixture: ComponentFixture<MostCommonHobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostCommonHobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostCommonHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
