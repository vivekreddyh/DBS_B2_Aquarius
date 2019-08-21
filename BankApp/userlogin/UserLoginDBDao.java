package com.example.demo.userlogin;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface UserLoginDBDao  extends JpaRepository<User_Login,Integer> {
	
	@Query("from User_Login where userid = ?1 and password=?2")
    public List<User_Login> getCredentials(int userid,String password);
    

}
