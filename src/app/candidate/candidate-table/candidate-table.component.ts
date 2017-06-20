import { Component, OnInit, ViewChild } from '@angular/core';
import { Candidate } from '../candidate.model';
import { CandidateService } from '../candidate.service'
import { Observable } from 'rxjs/Observable';
// import { DataTable, DataTableResource, DataTableTranslations } from 'angular-2-data-table';

@Component({
  selector: 'app-candidate-table',
  templateUrl: './candidate-table.component.html',
  styleUrls: ['./candidate-table.component.css']
})
export class CandidateTableComponent {


     public columns: Array<any>;
     public data: Array<any>;
     public tableOptions: {

     };

    constructor(private candidateService: CandidateService) {
        this.candidateTable();
    }
    
    private candidateTable() {
        this.columns = [
            {
                field: 'name',
                title: 'Name'
            },
            {
                field: 'university',
                title: 'University',
                sort: 'asc'
            },
            {
                field: 'degree',
                title: 'Degree',
                sort: 'desc'
            },
            {
                field: 'assessmentDate',
                title: 'Assessment Date',
                format: 'dd/MM/yyyy',
            },
            {
                field: 'assessmentGroup',
                title: 'Assessment Group',
            },
        ];
        
        this.data = this.candidateService.getCandidates();
            
        
        
        }
        



}
