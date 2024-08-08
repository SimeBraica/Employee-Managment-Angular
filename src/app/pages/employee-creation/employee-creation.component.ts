import { Component, input } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-creation',
  templateUrl: './employee-creation.component.html',
  styleUrl: './employee-creation.component.css'
})
export class EmployeeCreationComponent {
  employees: Employee[] = [];
  selectedJobTitle: string = '';
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';
  jobPosition: string = '';
  inputFormItems:  string[] = [];
  isOk : boolean = true;

  ngOnInit() {
    this.fetchEmployees();
  }

  constructor(
    private employeeService: EmployeeService
  ) {}

  onSubmit() {
    this.isOk = this.checkValidation();
    if (!this.isOk) {
      return;
    }
    const newEmployee = {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      jobPosition: this.selectedJobTitle
    };
    console.log(newEmployee);
  }

  checkValidation(): boolean {
    this.inputFormItems = [this.firstName, this.lastName, this.dateOfBirth, this.selectedJobTitle];
  
    for (let formItem of this.inputFormItems) {
      if (!formItem) {
        console.log("Validation failed");
        return false;
      }
    }
    return true;
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe((response) => {
      this.employees = response.data;
    });
  }

  getSelectedJobTitle(event: string){
    this.selectedJobTitle = event;
  }
}


