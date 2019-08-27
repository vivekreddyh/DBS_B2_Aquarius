package com.example.demo.login;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/rest")
public class RestCustomerLoginController {
	
	@Autowired
	CustomerLoginDBdao customer;

	@GetMapping("/customer/{login_id}/{pwd}") 
	public String isValidCredentials(@PathVariable int login_id,@PathVariable String pwd)
	{

	if(customer.getCredentials(login_id,pwd).size() == 1) {
		return "succces";
	}	
	  return "failure";
	}

	@GetMapping("/customers")
	public List<Customer_Login> getCustomers() {
		return customer.findAll();
	}

	

}
