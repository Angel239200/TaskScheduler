import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskChooseTypeComponent } from './task-choose-type.component';

describe('TaskChooseTypeComponent', () => {
  let component: TaskChooseTypeComponent;
  let fixture: ComponentFixture<TaskChooseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskChooseTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskChooseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
