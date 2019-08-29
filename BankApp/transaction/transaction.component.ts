import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TransactionServiceService } from '../transaction-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  custId:number;
  isPayeeSelected = false;

  sub:any;

  accountNo: number;
  ifscCode:string;
  amount:number;
  status:string;

  fromAccountNumber:number;
  fromAccountBalance:number;
  constructor( public http:HttpClient, 
                public router: Router, 
                public activatedRouter : ActivatedRoute,
                public transService:TransactionServiceService ) { 
                  sessionStorage.setItem("CustId","1");
                }

  ngOnInit() {
    // this.sub = this.activatedRouter.params
    //                 .subscribe( params => {
    //                       this.custId = params['id'];
    //           });
    this.custId = Number(sessionStorage.getItem("CustId"));// hardcoded need to change

    this.http.get("http://localhost:7980/customerAccount/getCustomerAccountDetails/"+this.custId)
    .toPromise()
    .then(
      (data) => {
         console.log(data);
        this.fromAccountNumber = data['acc_no'];
        this.fromAccountBalance = data['amount'];
        },
      (error) => {console.log(error);}
    )
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {console.log("In finally block");});
    
  }
  payeeSelected () {
    this.isPayeeSelected = !this.isPayeeSelected;
  }
  onSubmit(form:NgForm){
    // debugger
    
     if(form.valid == true || form.status == 'VALID'){
       this.accountNo = form.value.accountNo;
       this.amount = form.value.amount;
       this.ifscCode = form.value.ifscCode;
     }
     console.log(this.accountNo , this.amount, this.ifscCode);
    //  this.http.post("http://localhost:7980/transactions/addTransaction",
    //  {
    //   "fromacc":2,
    //   "tid":4,
    //   "toacc":this.accountNo,
    //   "amount":this.amount,
    //  })
    //  .toPromise()
    //  .then(
    //      data => {
    //          console.log("POST Request is successful ", data);
    //          this.status = "POST Request is successful";
            
    //      },
    //      error => {
    //          console.log("Error", error);
    //          this.status = "Error";
    //      }
    //  );
    // this.router.navigate(['/transactionSuccess']);
    //this.router.navigate([{outlets: {footerOutlet:['transactionSuccess','1','2', '3']}}]);
    this.transService.statusForTransaction = "SUCCESS";
    console.log("subhash",this.transService.statusForTransaction)
    this.router.navigate(["/transferFunds/"]);
   }


}
