import { Component, OnInit } from '@angular/core';
import types, { ITaskSubType, ITaskType } from '../../models/task-types';

@Component({
  templateUrl: './task-choose-type.component.html',
  styleUrls: ['./task-choose-type.component.css']
})
export class TaskChooseTypeComponent implements OnInit {
  private taskTypes = types;
  private allSubTypes = [];

  private _subTypeFilter: string;
  public get subTypeFilter(): string {
    return this._subTypeFilter;
  }
  public set subTypeFilter(value: string) {
    this._subTypeFilter = value;
    this.filteredTypes = this.subTypeFilter ? this.filterSubTypes(this.subTypeFilter) : this.clearFilter();
  }

  constructor() { }

  public filteredTypes: ITaskType[] = this.taskTypes;
  public selectedType: ITaskType;
  public typeIndex: number;
  public subTypeIndex: number;

  ngOnInit(): void {
    this.taskTypes.map(t => t.subTypes).forEach(subTypes => this.allSubTypes.push(subTypes));
    this.selectType({ index: 0 })
  }

  filterSubTypes(filter: string): ITaskType[] {
    filter = filter.toLocaleLowerCase();
    for (let i = 0; i < this.taskTypes.length; i++) {
      this.taskTypes[i].subTypes = this.allSubTypes[i].filter(t => t.name.toLocaleLowerCase().indexOf(filter) !== -1);
    }

    return this.taskTypes.filter(t => t.subTypes.length > 0);
  }

  clearFilter() {
    for (let i = 0; i < this.allSubTypes.length; i++) {
      this.taskTypes[i].subTypes = this.allSubTypes[i];
    }

    return this.taskTypes;
  }

  selectType(tab) {
    this.selectedType = types[tab.index];
    this.typeIndex = this.taskTypes.indexOf(this.selectedType);
  }

  selectSubType(subType: ITaskSubType) {
    this.subTypeIndex = this.selectedType.subTypes.indexOf(subType);
    console.log(this.typeIndex, this.subTypeIndex);

  }
}
