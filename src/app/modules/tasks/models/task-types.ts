import { Field } from "./task.model";

export interface ITaskType {
    name: string;
    subTypes: ITaskSubType[];
}

export class TaskType implements ITaskType {
    constructor(
        public name: string,
        public subTypes: ITaskSubType[]) { }
}

export interface ITaskSubType {
    name: string;
    fields: Field[];
}

export class TaskSubType implements ITaskSubType {
    constructor(
        public name: string,
        public fields: Field[] = []) { }
}

const emailType: ITaskType = new TaskType('Email and communication', [
    new TaskSubType('Send Email', [
        new Field('To:'),
        new Field('CC:'),
        new Field('Body:')
    ]),
    new TaskSubType('HTTPS Download',[
        new Field('URL:')
    ]),
    new TaskSubType('Check Email'),
    new TaskSubType('Ping Website',[
        new Field('Domain:')
    ])
]);

const securityType: ITaskType = new TaskType('Security and File System', [
    new TaskSubType('Security')
]);

const reportingType: ITaskType = new TaskType('Reporting', [
    new TaskSubType('Reporting')
]);

const otherType: ITaskType = new TaskType('Other', [
    new TaskSubType('something else')
]);

const types: ITaskType[] = [
    emailType,
    securityType,
    reportingType,
    otherType
]

export default types;