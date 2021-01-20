import { IRepeatType } from "../shared/repeatTypes";

export interface ITask {
    id: number;
    typeIndex: number;
    subTypeIndex: number;
    name: string;
    description: string;
    schedule: ISchedule;
    fields: string[];
    createdOn: Date;
}

export class Task implements ITask {
    constructor(public typeIndex: number, public subTypeIndex: number) {
    }

    public id: number;
    public name: string;
    public description: string;
    public schedule: ISchedule;
    public fields: string[] = [];
    public createdOn: Date;

}

export interface ISchedule {
    dateTime: { date: string, time: string };
    repeatType: IRepeatType;
}
