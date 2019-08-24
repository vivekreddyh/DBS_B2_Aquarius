package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/banking")
public class RestController {
	@Autowired
	DaoLayer dao;

		@GetMapping("/hello")
		public String sayHello()
		{
			return "Hello";
		}
		
		
		@GetMapping("/customer")
		public List<Customerdetails> displayAll(){
			return dao.findAll();
			
		}
		
		@GetMapping("/customer/{id}")
		public Optional<Customerdetails> displayOne(@PathVariable Integer id){
			
			return dao.findById(id);
			
		}

		@PostMapping("/customer")
		public String create(@RequestBody Customerdetails ac){
			if(dao.existsById(ac.getCustid()))
				return "Record already exists";
			dao.save(ac);
			return "Record saved";
			
		}
		
		
		@PutMapping("/customer")
		public String update(@RequestBody Customerdetails ac){
			if(dao.existsById(ac.getCustid()))
			{	
				dao.save(ac);
				return "Record updated";
			}
			return "Record doesnt exist";
			
		}
		
		@DeleteMapping("/customer/{ac}")
		public String delete(@PathVariable Integer ac){
			if(dao.existsById(ac))
			{	
				dao.deleteById(ac);
				return "Record deleted";
			}
			return "Record doesnt exist";
			
		}
		
		
}

