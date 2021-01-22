import { ISchedule } from "../../../shared/models/schedule-interfaces";

export interface ITask {
    id: number;
    typeIndex: number;
    subTypeIndex: number;
    name: string;
    description: string;
    schedule: ISchedule;
    fields: Field[];
    createdOn: Date;
}

export class Task implements ITask {
    constructor(public typeIndex: number, public subTypeIndex: number) {
    }

    public id: number;
    public name: string;
    public description: string;
    public schedule: ISchedule;
    public fields: Field[] = [];
    public createdOn: Date;
}

export class Field {
    constructor(public name: string, public value: string = null) { }
}