import { Candidate } from '../candidate/candidate.model';

export class Group {

    constructor(
        public name: String,
        public date: Date,
        public candidates: Candidate[],
        public groupId?: number,
        //public teams: Team[]
    ){}


}