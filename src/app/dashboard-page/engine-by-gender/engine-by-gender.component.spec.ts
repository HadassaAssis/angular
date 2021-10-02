import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineByGenderComponent } from './engine-by-gender.component';

describe('EngineByGenderComponent', () => {
  let component: EngineByGenderComponent;
  let fixture: ComponentFixture<EngineByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineByGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
