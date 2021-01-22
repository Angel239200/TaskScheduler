import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskChooseTypeComponent } from './components/task-choose-type/task-choose-type.component';
import { TaskCreateGuard as TaskCreateGuard } from './guards/create/task-create.guard';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskConfigureFieldsComponent } from './components/task-configure-fields/task-configure-fields.component';
import { TaskConfigureFieldsGuard } from './guards/configure-fields/task-configure-fields.guard';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  { path: 'list', component: TaskListComponent },
  { path: 'create', component: TaskChooseTypeComponent },
  {
    path: 'create/:type/:subtype',
    component: TaskCreateComponent,
    canActivate: [TaskCreateGuard]
  },
  {
    path: 'create/:type/:subtype/:taskId',
    component: TaskConfigureFieldsComponent,
    canActivate: [TaskCreateGuard, TaskConfigureFieldsGuard]
  },
  { path: '', redirectTo: '/task/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
