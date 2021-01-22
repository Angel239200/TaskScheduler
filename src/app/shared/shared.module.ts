import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScheduleComponent } from './schedule/schedule.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

const materials=[
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSelectModule,
  MatCheckboxModule,
]

@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    materials
  ],
  exports: [
    ScheduleComponent,
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
