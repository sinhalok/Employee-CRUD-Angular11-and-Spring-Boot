import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewComponent } from './view/view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
