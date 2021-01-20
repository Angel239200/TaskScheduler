import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskChooseTypeComponent } from '../task/task-choose-type/task-choose-type.component';
import { TaskCreateGuard as TaskCreateGuard } from '../task/task-create/task-create.guard';
import { TaskCreateComponent } from '../task/task-create/task-create.component';
import { TaskListComponent } from '../task/task-list/task-list.component';
import { TaskConfigureFieldsComponent } from '../task/task-configure-fields/task-configure-fields.component';
import { TaskConfigureFieldsGuard } from '../task/task-configure-fields/task-configure-fields.guard';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'tasks', component: TaskListComponent },
      { path: 'task/create', component: TaskChooseTypeComponent },
      {
        path: 'task/create/:type/:subtype',
        component: TaskCreateComponent,
        canActivate: [TaskCreateGuard]
      },
      {
        path: 'task/create/:taskId',
        component: TaskConfigureFieldsComponent,
        canActivate: [TaskConfigureFieldsGuard]
      }
    ])
  ],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
