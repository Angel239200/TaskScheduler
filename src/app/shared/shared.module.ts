import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ScheduleComponent,
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
