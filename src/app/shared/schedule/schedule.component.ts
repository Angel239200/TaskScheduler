import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ISchedule } from 'src/app/task/task';
import repeatTypes, { IRepeatType } from '../repeatTypes';

@Component({
  selector: 'ts-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  private _selectedTypeName: string;
  public get selectedTypeName(): string {
    return this._selectedTypeName;
  }
  public set selectedTypeName(value: string) {
    this._selectedTypeName = value;
    this.selectedType = repeatTypes.find(type => type.name == this.selectedTypeName);
    this.isCustomType = this.selectedTypeName == repeatTypes[0].name;
  }

  constructor() {
  }
  
  @Output() getSchedule: EventEmitter<ISchedule> = new EventEmitter<ISchedule>();

  public dateTime: { date: string, time: string } = {
    date: "2021-01-20", 
    time: '02:02'
  };

  public repeatTypes = repeatTypes;
  public selectedType: IRepeatType = repeatTypes[1];
  public isCustomType: boolean;
  
  public repeatTimesTypes: string[] = ["Day", "Week", "Month"];
  public weekDays = ["M", "T", "W", "Th", "F", "S", "Su"];
  public anyTimeWithinChecked: boolean = false;

  ngOnInit(): void {
    this._selectedTypeName = this.selectedType.name;    
  }

  onScheduleSave() {
    this.selectedType.startWithinTime = this.selectedType.startWithinTime ? this.selectedType.startWithinTime : this.dateTime.time;
    this.selectedType.endWithinTime = this.selectedType.endWithinTime ? this.selectedType.endWithinTime : this.dateTime.time;

    let schedule: ISchedule = {
      dateTime: this.dateTime,
      repeatType: this.selectedType
    }
    
    this.getSchedule.emit(schedule);
  }
}
