package com.example.demo.userlogin;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class User_Login {

	@Id
	private int userid;
	private String password;
	private Date last_login_time;
	public int getUserid() {
		return userid;
	}
	public void setUserId(int userid) {
		this.userid = userid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date getLast_login_time() {
		return last_login_time;
	}
	public void setLast_login_time(Date last_login_time) {
		this.last_login_time = last_login_time;
	}
	@Override
	public String toString() {
		return "User_Login [userId=" + userid + ", password=" + password + ", last_login_time=" + last_login_time + "]";
	}
	
	
	
	
}
