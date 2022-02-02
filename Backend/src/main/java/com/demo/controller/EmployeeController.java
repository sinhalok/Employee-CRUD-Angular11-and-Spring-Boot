package com.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Employee;
import com.demo.repository.EmployeeRepository;



@RestController
@RequestMapping
@CrossOrigin
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//Get all Employee
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployee(){
		return employeeRepository.findAll();
				
	}
	
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	
	//Get Employee Details By Id
	@GetMapping("/employees/{id}")
	public ResponseEntity<?> getEmployeeById(@PathVariable long id){
		Employee emp = employeeRepository.findById(id).orElseThrow();
		return ResponseEntity.ok(emp);
			
	}
	
	//Edit Employee Details
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<?> editEmployee(@PathVariable Long id, @RequestBody Employee updateEmp){
		Employee emp = employeeRepository.findById(id).orElseThrow();
		
		emp.setFirstName(updateEmp.getFirstName());
		emp.setLastName(updateEmp.getLastName());
		emp.setEmail(updateEmp.getEmail());
		
		Employee updatedEmployeeDetails = employeeRepository.save(emp);
		return ResponseEntity.ok(updatedEmployeeDetails);
		
		
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable long id){
		Employee emp = employeeRepository.findById(id)
				.orElseThrow();
		
		employeeRepository.delete(emp);
		Map<String,Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	

}
