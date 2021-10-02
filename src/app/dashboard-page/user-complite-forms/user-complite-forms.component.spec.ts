import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompliteFormsComponent } from './user-complite-forms.component';

describe('UserCompliteFormsComponent', () => {
  let component: UserCompliteFormsComponent;
  let fixture: ComponentFixture<UserCompliteFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCompliteFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompliteFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
