import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'task', loadChildren: () => import('./modules/tasks/task.module').then(m => m.TaskModule) },
  { path: '', redirectTo: 'task', pathMatch: 'full' },
  { path: '**', redirectTo: 'task', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
