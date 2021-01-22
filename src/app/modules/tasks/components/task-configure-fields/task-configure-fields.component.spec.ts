import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskConfigureFieldsComponent } from './task-configure-fields.component';

describe('TaskConfigureFieldsComponent', () => {
  let component: TaskConfigureFieldsComponent;
  let fixture: ComponentFixture<TaskConfigureFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskConfigureFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskConfigureFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
