import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:any; 
  employee:Employee=new Employee;

  constructor(private route: ActivatedRoute,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']; 
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data; 
    });
  }



}
