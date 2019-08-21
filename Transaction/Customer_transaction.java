package com.example.demo.Transaction;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer_transaction {
	@Id
	private int tid;
	private int fromacc;
	private int toacc;
	private Date trans_time;
	private double amount;
	private String trans_type;
	private String trans_status;
	
	public String getTrans_status() {
		return trans_status;
	}
	public void setTrans_status(String trans_status) {
		this.trans_status = trans_status;
	}
	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public int getFromacc() {
		return fromacc;
	}
	public void setFromacc(int fromacc) {
		this.fromacc = fromacc;
	}
	public int getToacc() {
		return toacc;
	}
	
	public void setToacc(int toacc) {
		this.toacc = toacc;
	}
	public Date getTrans_time() {
		return trans_time;
	}
	public void setTrans_time(Date trans_time) {
		this.trans_time = trans_time;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getTrans_type() {
		return trans_type;
	}
	public void setTrans_type(String trans_type) {
		this.trans_type = trans_type;
	}
	@Override
	public String toString() {
		return "Transaction [tid=" + tid + ", fromacc=" + fromacc + ", toacc=" + toacc + ", trans_time=" + trans_time
				+ ", amount=" + amount + ", trans_type=" + trans_type + "]";
	}
}
