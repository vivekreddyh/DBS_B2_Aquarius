package com.example.demo.login;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface CustomerLoginDBdao  extends JpaRepository<Customer_Login,Integer> {
	
	@Query("from Customer_Login where login_id = ?1 and pwd=?2")
    public List<Customer_Login> getCredentials(int login_id,String pwd);
    


}
