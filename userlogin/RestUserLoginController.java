package com.example.demo.userlogin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class RestUserLoginController {
	


	@Autowired
	UserLoginDBDao usr;

	@GetMapping("/user/{userid}/{password}") 
	public String isValidCredentials(@PathVariable int userid,@PathVariable String password)
	{

	if(usr.getCredentials(userid,password).size() == 1) {
		return "succces";
	}	
	  return "failure";
	}

	
}
