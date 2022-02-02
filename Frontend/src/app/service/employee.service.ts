import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 url:string="http://localhost:8080/"
  constructor(private httpClient:HttpClient) { }


  getUsers() {
    return this.httpClient.get(this.url+'employees');
  }

 
   createUser(employee: Employee): Observable<object> {
    return this.httpClient.post<object>(this.url + 'employees', employee);
  }

  getEmployeeById(id:number){
    return this.httpClient.get(this.url + 'employees/' + id);
  }

  editUser( id: number ,employee: Employee): Observable<object> {
    return this.httpClient.put<object>(this.url + 'employees/'+id, employee);
  }

  deleteEmployee(id:number): Observable<object>{
    return this.httpClient.delete<object>(this.url + 'employees/'+id);
  }

 
}
