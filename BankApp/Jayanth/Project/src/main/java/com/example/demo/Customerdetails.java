package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customerdetails {

	@Id
	int custid;
	String custname;
	int phno;
	String email;
	String custaddress;
	String custpan;
	public int getCustid() {
		return custid;
	}

	public void setCustid(int custid) {
		this.custid = custid;
	}
	public String getCustname() {
		return custname;
	}
	public void setCustname(String custname) {
		this.custname = custname;
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
	public String getCustaddress() {
		return custaddress;
	}
	public void setCustaddress(String custaddress) {
		this.custaddress = custaddress;
	}
	public String getCustpan() {
		return custpan;
	}
	public void setCustpan(String custpan) {
		this.custpan = custpan;
	}
	@Override
	public String toString() {
		return "AccDets [custid=" + custid + ", custname=" + custname + ", phno=" + phno + ", email=" + email
				+ ", custaddress=" + custaddress + ", custpan=" + custpan + "]";
	}
	
	

}
