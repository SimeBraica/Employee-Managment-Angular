import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Employee } from '../../models/employee';
import * as Linq from 'linq';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.css'
})
export class SortingComponent {

  sortCriterion: string = '';
  
  byFirstName: boolean = false;
  byLastName: boolean = false;
  byJobTitle: boolean = false;
  
  
  @Input() employees: Employee[] = [];
  @Input() sortingCriteria: string[] = [];  

  @Output() sortedEmployeesEmmiter  = new EventEmitter<Employee[]>();

  sortAsc(){
    switch (this.sortCriterion) {
      case "firstName":
        this.sortBy(this.sortCriterion, "asc");
        this.sendSortedEmployees();
        break;
      case "lastName":
        this.sortBy(this.sortCriterion, "asc");
        this.sendSortedEmployees();
        break;
      case "jobTitle":
        this.sortBy(this.sortCriterion, "asc");
        this.sendSortedEmployees();
        break;
    }
  }

  sortDesc(){
    switch (this.sortCriterion) {
      case "firstName":
        this.sortBy(this.sortCriterion, "desc");
        this.sendSortedEmployees();
        break;
      case "lastName":
        this.sortBy(this.sortCriterion, "desc");
        this.sendSortedEmployees();
        break;
      case "jobTitle":
        this.sortBy(this.sortCriterion, "desc");
        this.sendSortedEmployees();
        break;
    }
  }

  sortBy(criterion: string, ascOrDesc: string){
    if(ascOrDesc == "asc"){
      this.employees = Linq.default.from(this.employees)
      .orderBy(emp => emp[criterion as keyof Employee])
      .toArray()
    }
    if(ascOrDesc == "desc"){
      this.employees = Linq.default.from(this.employees)
      .orderByDescending(emp => emp[criterion as keyof Employee])
      .toArray()
    }
    return null;
  }

  sendSortedEmployees(){
    this.sortedEmployeesEmmiter.emit(this.employees);
  }
}
