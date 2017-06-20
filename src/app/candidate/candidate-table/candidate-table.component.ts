import { Component, OnInit, ViewChild } from '@angular/core';
import { Candidate } from '../candidate.model';
import { CandidateService } from '../candidate.service'
// import { DataTable, DataTableResource, DataTableTranslations } from 'angular-2-data-table';

@Component({
  selector: 'app-candidate-table',
  templateUrl: './candidate-table.component.html',
  styleUrls: ['./candidate-table.component.css']
})
export class CandidateTableComponent {

    // constructor(private candidateService: CandidateService) {
    //    this.candidates = this.candidateService.getCandidates();
    //    this.candidateResource.count().then(count => this.candidateCount = count);
    // }

    // candidateResource = new DataTableResource(this.candidateService.getCandidates());
    // candidates: Candidate[] = [];
    // candidateCount: number = 0;

    // @ViewChild(DataTable) candidateTable: DataTable;
 
    // reloadCandidates(params) {
    //     this.candidateResource.query(params).then(candidates => this.candidates = candidates);
    // }

    // translations = <DataTableTranslations>{
    //      indexColumn: 'Index column',
    //      expandColumn: 'Expand column',
    //      selectColumn: 'Select column',
    //      paginationLimit: 'Max results',
    //      paginationRange: 'Result range'
    //   };

}
