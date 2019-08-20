package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer_Details {
	@Id
	int cust_id;
	String cust_name;
	int phno;
	String email;
	String cust_address;
	String cust_pan;

	public Customer_Details(int cust_id, String cust_name, int phno, String email, String cust_address,
			String cust_pan) {
		super();
		this.cust_id = cust_id;
		this.cust_name = cust_name;
		this.phno = phno;
		this.email = email;
		this.cust_address = cust_address;
		this.cust_pan = cust_pan;
	}

	public Customer_Details() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getCust_id() {
		return cust_id;
	}

	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}

	public String getCust_name() {
		return cust_name;
	}

	public void setCust_name(String cust_name) {
		this.cust_name = cust_name;
	}

	public int getPhno() {
		return phno;
	}

	public void setPhno(int phno) {
		this.phno = phno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCust_address() {
		return cust_address;
	}

	public void setCust_address(String cust_address) {
		this.cust_address = cust_address;
	}

	public String getCust_pan() {
		return cust_pan;
	}

	public void setCust_pan(String cust_pan) {
		this.cust_pan = cust_pan;
	}

}
