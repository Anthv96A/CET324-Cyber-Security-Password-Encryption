export class Task {
    constructor(
        public taskID: number,
        public name: string,
        public description: string,
        public choosenAnswer?: any,
        public questions?: any[],
        public images?: string[],
        public type?: string,
        public answered?: boolean
    ){}
}