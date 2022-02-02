import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

  {path:'',redirectTo: 'employee',pathMatch:'full'},
  {path:'employee',component:EmployeeDashboardComponent},
  {path:'addEmployee',component:AddEmployeeComponent},
  {path: 'editEmployee/:id',component:EditEmployeeComponent},
  {path: 'view/:id',component:ViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
