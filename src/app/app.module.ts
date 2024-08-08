import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeManagmentComponent } from './pages/employee-managment/employee-managment.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeCreationComponent } from './pages/employee-creation/employee-creation.component';
import { NavbarComponent } from './reusable/navbar/navbar.component';
import { PaginationComponent } from './reusable/pagination/pagination.component';
import { SearchFilterComponent } from './reusable/search-filter/search-filter.component';
import { JobDropdownComponent } from './reusable/job-dropdown/job-dropdown.component';
import { SortingComponent } from './reusable/sorting/sorting.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeManagmentComponent,
    EmployeeCreationComponent,
    NavbarComponent,
    PaginationComponent,
    SearchFilterComponent,
    JobDropdownComponent,
    SortingComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


