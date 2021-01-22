import { TestBed } from '@angular/core/testing';

import { TaskCreateGuard } from './task-create.guard';

describe('TaskCreateGuardGuard', () => {
  let guard: TaskCreateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TaskCreateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
