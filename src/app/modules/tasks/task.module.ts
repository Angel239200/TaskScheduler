import { NgModule } from '@angular/core';
import { TaskRoutingModule } from './task-routing.module';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskChooseTypeComponent } from './components/task-choose-type/task-choose-type.component';
import { TaskConfigureFieldsComponent } from './components/task-configure-fields/task-configure-fields.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

const material = [
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatSortModule,
  MatTabsModule,
  MatIconModule,
  MatButtonModule,
  MatListModule
]

@NgModule({
  declarations: [
    TaskCreateComponent,
    TaskListComponent,
    TaskChooseTypeComponent,
    TaskConfigureFieldsComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    material,
    TaskRoutingModule
  ]
})
export class TaskModule { }
