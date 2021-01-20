import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskRoutingModule } from '../routing/task-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskChooseTypeComponent } from './task-choose-type/task-choose-type.component';
import { RouterModule } from '@angular/router';
import { TaskConfigureFieldsComponent } from './task-configure-fields/task-configure-fields.component';

@NgModule({
  declarations: [
    TaskCreateComponent,
    TaskListComponent,
    TaskChooseTypeComponent,
    TaskConfigureFieldsComponent,
    RouterModule
  ],
  imports: [
    SharedModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
