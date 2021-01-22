import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISchedule } from 'src/app/shared/schedule/schedule-interfaces';
import { ITask, Task } from '../task';
import { TaskService } from '../task-service/task.service';

@Component({
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  constructor(private route: ActivatedRoute, private taskService:TaskService) { }

  public task: ITask;

  ngOnInit(): void {
    let type = +this.route.snapshot.paramMap.get('type');
    let subType = +this.route.snapshot.paramMap.get('subtype');
    
    this.task = new Task(type, subType);
  }

  setSchedule(schedule: ISchedule): void {
    this.task.schedule = schedule;
  }

  createTask() {
    this.task.createdOn = new Date();

    this.taskService.saveNewTask(this.task);
  }
}
