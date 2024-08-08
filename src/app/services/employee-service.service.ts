import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = environment.rest;
  filteredEmployees: Employee[] = [];

  constructor(private http: HttpClient) { }

  employees: Employee[] = [];

  getEmployees(): Observable<{ success: boolean, data: Employee[] }> {
      return this.http.get<{ success: boolean, data: Employee[] }>(this.employeesUrl)
  }
}
