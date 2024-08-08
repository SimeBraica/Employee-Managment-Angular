import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-job-dropdown',
  templateUrl: './job-dropdown.component.html',
  styleUrl: './job-dropdown.component.css'
})
export class JobDropdownComponent implements OnChanges {
  selectedJobTitle: string = '';
  jobTitles: string[] = [];

  @Input() employees: Employee[] = [];
  @Output() selectedJobTitleEmmiter  = new EventEmitter<string>();

  ngOnChanges() {
      this.getJobTitles();
  }

   getJobTitles(){
    const jobTitles: string[] = [];
    this.employees.forEach((employee) => {
      if (!jobTitles.includes(employee.jobTitle)) {
        jobTitles.push(employee.jobTitle);
      }
    }); 
    this.jobTitles = jobTitles;
  }

  sendSelectedJobTitle() {
    this.selectedJobTitleEmmiter.emit(this.selectedJobTitle);
  }

}
