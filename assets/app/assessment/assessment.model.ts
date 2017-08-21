import { Task } from './tasks/task.model';

export class Assessment{
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public enabled: boolean,
        public imageURL: string,
        public scenario: string,
        public items:  string[],
        public objectives : string[],
        public tasks?: Task[]){}
}