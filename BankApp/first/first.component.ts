import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

    lastTenTransactions:any = [];
    customerDetails:any = [] ;
    toggleTransactions:boolean = false;
    //custId = sessionStorage.getItem("custId");
    custId = 2;
    ngOnInit(){
      // get customer account id from the customerdetails
      this.http.get("http://localhost:7980/customerAccount/getCustomerAccountDetails/"+this.custId)
      .toPromise()
      .then(
        (data) => {
           console.log("first",data);
           this.customerDetails.push(data);
          },
        (error) => {console.log(error);}
      )
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {console.log("In finally block");});
      // get last 10 transactions from the transaction  tables
     

    }
    constructor (public http:HttpClient) {}

    public getTransactions(acc_number:any){
      this.toggleTransactions = !this.toggleTransactions;
      console.log("second",this.customerDetails);
      this.http.get("http://localhost:7980/transactions/getLastTenTransactions/"+acc_number)
      .toPromise()
      .then(
        (data) => {
           console.log("third",data);
            this.lastTenTransactions = (data);
          },
        (error) => {console.log(error);}
      )
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {console.log("Getting last 10 transactions block closed");});
    }
}
 