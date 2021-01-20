import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISchedule, ITask, Task } from '../task';

@Component({
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

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

    let tasks = [];
    tasks = this.saveNewTaskInLocalStorage(tasks);
  }

  private saveNewTaskInLocalStorage(tasks: any[]) {
    if (localStorage.getItem('tasks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      
      this.task.id = tasks.length + 1;
      tasks = [...tasks, this.task];
    }
    else {
      this.task.id = 1;
      tasks = [this.task];
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));

    return tasks;
  }
}
