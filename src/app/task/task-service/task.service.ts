import { Injectable } from '@angular/core';
import { ITask } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  public saveNewTask(task: ITask) {
    let tasks = [];
    if (localStorage.getItem('tasks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));

      task.id = tasks.length + 1;
      tasks = [...tasks, task];
    }
    else {
      task.id = 1;
      tasks = [task];
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  public updateTask(task:ITask) {
    let tasks = [];
    if (localStorage.getItem('tasks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));

      let taskIndex = tasks.findIndex(t => t.id == task.id);
      tasks[taskIndex] = task;
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
