import { Component, OnInit } from '@angular/core';
import { ITask } from '../task';
import types from '../task-choose-type/task-types';

@Component({
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor() { }

  public tasks: ITask[];
  public taskTypes = types;

  ngOnInit(): void {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
  }

}
