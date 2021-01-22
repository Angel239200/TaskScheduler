import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import repeatTypes, { IRepeatType, ISchedule } from './schedule-interfaces';

@Component({
  selector: 'ts-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  constructor() {
  }

  @Output() getSchedule: EventEmitter<ISchedule> = new EventEmitter<ISchedule>();

  public dateTime: string;

  public repeatTypes = repeatTypes;
  public selectedType: IRepeatType = repeatTypes[1];
  public isCustomType: boolean;

  public repeatTimesTypes: string[] = ["Day", "Week", "Month"];
  public weekDays = ["M", "T", "W", "Th", "F", "S", "Su"];
  public anyTimeWithinChecked: boolean = false;

  ngOnInit(): void {
  }

  onTypeSelect(typeName) {
    this.selectedType = repeatTypes.find(type => type.name == typeName);
    this.isCustomType = typeName === repeatTypes[0].name;
  }

  saveSchedule() {
    if (this.dateTime == null)
      return;
      
    let time = new Date(this.dateTime).toLocaleTimeString();

    this.selectedType.startWithinTime = this.selectedType.startWithinTime ? this.selectedType.startWithinTime : time;
    this.selectedType.endWithinTime = this.selectedType.endWithinTime ? this.selectedType.endWithinTime : time;


    let schedule: ISchedule = {
      dateTime: this.dateTime,
      repeatType: this.selectedType
    }

    this.getSchedule.emit(schedule);
  }
}
