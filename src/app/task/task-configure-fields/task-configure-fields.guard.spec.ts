import { TestBed } from '@angular/core/testing';

import { TaskConfigureFieldsGuard } from './task-configure-fields.guard';

describe('TaskConfigureFieldsGuard', () => {
  let guard: TaskConfigureFieldsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TaskConfigureFieldsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
