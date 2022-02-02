import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee=new Employee();
  constructor(private employeeService: EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.employeeService.createUser(this.employee).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/employee']);
    },
    error=>{
      console.log(error);   
      this.router.navigate(['/addEmployee']);  
    });
  }


}
