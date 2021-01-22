import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Field, ITask } from '../../models/task.model';
import types from '../../models/task-types';
import { TaskService } from '../../services/task.service';

@Component({
  templateUrl: './task-configure-fields.component.html',
  styleUrls: ['./task-configure-fields.component.css']
})
export class TaskConfigureFieldsComponent implements OnInit {
  public fieldName: string;
  public task: ITask;
  public typeFields: Field[];

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

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
    if (this.task.fields.find(f=>f.name==fieldName)) {
      alert("The field exists");

      return;
    }

    this.task.fields = [...this.task.fields, new Field(fieldName)]
  }

  removeField(fieldName: string) {
    this.task.fields = this.task.fields.filter((f: Field) => f.name !== fieldName);
  }

  saveTask() {
    this.taskService.updateTask(this.task);
  }
}
