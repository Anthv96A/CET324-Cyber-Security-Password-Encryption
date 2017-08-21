import { Group } from '../group/group.model';

export class Candidate {
    constructor(
        public name: string,
         public university: string,
          public degree: string,
           public assessmentDate: Date,
            public candidateID?: number,
            public assessmentGroup?: Group
             ){}
}