package com.example.demo.Transaction;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/transactions")
public class TransactionController{
		@Autowired
		TransDAO transDAO;
		
		@GetMapping("/getTransactions/{id}")
		public Optional<Customer_transaction> getTransactionsById(@PathVariable int id){
			return  transDAO.findById(id);
		}
		
		@GetMapping("/allTransactions")
		public List<Customer_transaction> getAllTransactions(){
			return transDAO.findAll();
		}
	
		@GetMapping("/getLastTenTransactions/{fromacc}")
		public List<Customer_transaction> getLastTenTransaction(@PathVariable int fromacc){ 
			//System.out.println("Last ten transactions are "+fromacc);
			List<Customer_transaction> listOfTransactions = transDAO.getLastTenTransactions(fromacc, 10);
			if(listOfTransactions.size() > 10) {
			 return transDAO.getLastTenTransactions(fromacc, 10).subList(0, 10); 
			}
			return listOfTransactions;
		}
	 
		
		@PostMapping("/addTransaction")
		public boolean  addTransaction(@RequestBody Customer_transaction transaction) {
			transaction.setTrans_time(new Date());
			transDAO.save(transaction);
			return true;
		}
		
		@PostMapping("/updateTransaction")
		public String updateTransaction(@RequestBody Customer_transaction transaction) {
			if(transDAO.existsById(transaction.getTid())) {
				transDAO.save(transaction);
				return "Success";
			}
			return "Failure";
		}
		
}	
