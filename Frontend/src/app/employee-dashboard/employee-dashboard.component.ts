import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  id:any;
  public searchText="";
  //empl: Employee;
  usrs:any; 
  constructor(private employeeService:EmployeeService,private router : Router) {
    // this.empl = new Employee(0,'','','');
   }

  
  ngOnInit(): void {
    
    this.employeeService.getUsers().subscribe((data) => this.usrs = data);
    this.deleteEmployee(this.id);
   
  }

  editEmployee(id:any){
    this.router.navigate(['/editEmployee',id]);

  }

  deleteEmployee(id:any){
    
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      window.location.reload();
      this.router.navigate(['/employee']);

    },err=>{
      console.log(err);
    });
    
  }

  viewEmployee(id:any){
    this.router.navigate(['/view',id]);
  }


}


