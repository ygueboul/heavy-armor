import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesItemComponent } from './exercises-item.component';

describe('ExercisesItemComponent', () => {
  let component: ExercisesItemComponent;
  let fixture: ComponentFixture<ExercisesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
