import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManagmentComponent } from './pages/employee-managment/employee-managment.component'; 
import { EmployeeCreationComponent } from './pages/employee-creation/employee-creation.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee-management', pathMatch: 'full' }, 
  { path: 'employee-management', component: EmployeeManagmentComponent },
  { path: 'employee-creation', component: EmployeeCreationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
