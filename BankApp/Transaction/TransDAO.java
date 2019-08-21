package com.example.demo.Transaction;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;



public interface TransDAO extends JpaRepository<Customer_transaction, Integer>{

	
	  @Query("from Customer_transaction where fromacc = ?1 order by tid desc") 
	  public List<Customer_transaction> getLastTenTransactions(int fromacc, int rows);
	 
	
	/*
	 * @Query("from Employee where designation = ?1 order by age") public
	 * List<Employee> getEmployeeInSortedByAge(String designation);
	 */
	
}
