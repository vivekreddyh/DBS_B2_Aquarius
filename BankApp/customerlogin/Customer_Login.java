

package com.example.demo.login;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer_Login {
	@Id
	private int login_id;
	private String pwd;
	private Date last_login_time;
	public int getLogin_id() {
		return login_id;
	}
	public void setLogin_id(int login_id) {
		this.login_id = login_id;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
	public Date getLast_login_time() {
		return last_login_time;
	}
	public void setLast_login_time(Date last_login_time) {
		this.last_login_time = last_login_time;
	}
	@Override
	public String toString() {
		return "CustomerCredentials [login_id=" + login_id + ", pwd=" + pwd + ", last_login_time=" + last_login_time
				+ "]";
	}

}