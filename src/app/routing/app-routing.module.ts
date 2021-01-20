import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from '../task/task-list/task-list.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', component: TaskListComponent, pathMatch: 'full' },
      { path: '**', component: TaskListComponent, pathMatch: 'full' }
    ])
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
