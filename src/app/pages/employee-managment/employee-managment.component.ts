import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service';
import { Employee } from '../../models/employee'; 

@Component({
  selector: 'app-employee-managment',
  templateUrl: './employee-managment.component.html',
  styleUrls: ['./employee-managment.component.css']
})
export class EmployeeManagmentComponent {
  
  employees: Employee[] = [];
  selectedJobTitle: string = '';
  filteredEmployees: Employee[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  sortingCriteria: string[] = [];

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.fetchEmployees();
    this.getAllSortingCriteria();
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe((response) => {
      this.employees = response.data;
      this.filteredEmployees = [...this.employees]; 
      this.totalItems = this.filteredEmployees.length;
      this.updatePaginatedEmployees();
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePaginatedEmployees();
  }

  updatePaginatedEmployees() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.filteredEmployees = this.employees.slice(startIndex, startIndex + this.itemsPerPage);
  }

  filterByJobTitle() {
    if (this.selectedJobTitle) {
      this.filteredEmployees = this.employees.filter(employee => employee.jobTitle == this.selectedJobTitle);
    } 
  }

  getFilteredEmployees(event: Employee[]){
    this.filteredEmployees = event;
  }

  getSortedEmployees(event: Employee[]){
    this.filteredEmployees = event;
  }

  getSelectedJobTitle(event: string){
    this.selectedJobTitle = event;
    this.filterByJobTitle()
  }

  resetTable(){
    this.selectedJobTitle = '';
    this.fetchEmployees()
  }

  getAllSortingCriteria() {
    this.sortingCriteria.push('firstName', 'lastName', 'jobTitle');
  }
  
}


