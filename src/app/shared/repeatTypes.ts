export interface IRepeatType {
    name: string;
    repeatTimes: number;
    repeatTimesType: string;
    repeatDays: string[];
    startWithinTime: string;
    endWithinTime: string;
}

export class RepeatType implements IRepeatType {
    constructor(public name: string,
        public repeatTimes: number,
        public repeatTimesType: string,
        public repeatDays: string[] = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'],
        public startWithinTime: string = null,
        public endWithinTime: string = null) {

    }
}

const repeatTypes: RepeatType[] = [
    new RepeatType("Custom", 1, "Day"),
    new RepeatType("Every day", 1, "Day"),
    new RepeatType("Every other day", 2, "Day"),
    new RepeatType("Every week", 1, "Week"),
    new RepeatType("Every month", 1, "Month")
]

export default repeatTypes;