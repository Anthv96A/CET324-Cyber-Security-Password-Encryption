import { Component, OnInit, ViewChild } from '@angular/core';
import { Candidate } from '../candidate.model';
import { CandidateService } from '../candidate.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-candidate-table',
  templateUrl: './candidate-table.component.html',
  styleUrls: ['./candidate-table.component.css']
})
export class CandidateTableComponent implements OnInit{


    
     public data: Array<Candidate>;

    constructor(
        public candidateService: CandidateService,
        private activatedRoute: ActivatedRoute,
        private router: Router
        ) {
      
    }


    ngOnInit(){
       this.candidateService.getCandidates().subscribe((data)=>{
             this.data = data;
             console.log(this.data);
       });
    }



    



}