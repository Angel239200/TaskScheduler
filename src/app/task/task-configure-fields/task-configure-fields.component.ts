import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITask } from '../task';
import types, { Field } from '../task-choose-type/task-types';

@Component({
  templateUrl: './task-configure-fields.component.html',
  styleUrls: ['./task-configure-fields.component.css']
})
export class TaskConfigureFieldsComponent implements OnInit {
  public fieldName: string;
  public task: ITask;
  public typeFields: Field[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (!localStorage.getItem('tasks')) {
      alert("not items in array");

      return;
    }

    let tasks = [];
    tasks = JSON.parse(localStorage.getItem('tasks'));

    let taskId = +this.route.snapshot.paramMap.get('taskId');
    this.task = tasks.find((t: ITask) => t.id == taskId);

    this.typeFields = types[this.task.typeIndex].subTypes[this.task.subTypeIndex].fields;
  }

  addField(fieldName: string) {
    if (this.task.fields.includes(fieldName)) {
      alert("The field exists");

      return;
    }

    this.task.fields = [...this.task.fields, fieldName]
  }

  removeField(fieldName: string) {
    this.task.fields = this.task.fields.filter((f: string) => f !== fieldName);
  }

  saveTask() {
    let tasks = [];
    if (localStorage.getItem('tasks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));

      let taskIndex = tasks.findIndex(t => t.id == this.task.id);
      tasks[taskIndex] = this.task;
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
