import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee';
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css'
})
export class SearchFilterComponent {
  searchText: string = '';
  filteredEmployees: Employee[] = [];

  @Input() employees: Employee[] = [];
  @Output() filteredEmployeesEmitter  = new EventEmitter<Employee[]>();

  filterBySearchText() {
    const searchTextLower = this.searchText.toLowerCase().split(' ').join('');
    this.filteredEmployees = this.employees.filter(employee => 
      (employee.firstName + employee.lastName).toLowerCase().includes(searchTextLower)
    );
    this.sendFilteredEmployees();
  }

  sendFilteredEmployees(){
    this.filteredEmployeesEmitter.emit(this.filteredEmployees);
  }

}
