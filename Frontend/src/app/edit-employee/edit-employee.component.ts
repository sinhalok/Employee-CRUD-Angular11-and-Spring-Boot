import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee : Employee = new Employee();
  id:any;


  constructor(private employeeService: EmployeeService,private routee: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.routee.snapshot.params['id'];
    
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;

    },error=>{
      console.log(error);
    })
  }

  onSubmit(){
    this.employeeService.editUser(this.id,this.employee).subscribe(data=>{
      
      this.router.navigate(['/employee']);

    },error=>{
      console.log(error);
    })

  }

}
