import { Component, OnInit } from '@angular/core';
import  { TransactionServiceService } from '../transaction-service.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cummunicator',
  templateUrl: './cummunicator.component.html',
  styleUrls: ['./cummunicator.component.css']
})
export class CummunicatorComponent implements OnInit {
  
   fromacc:any;
    toacc:any;
    amount:any;
    sub:any;
    toggleMsg:boolean = false;
  constructor(public transService:TransactionServiceService ,public router: Router,public route:ActivatedRoute) { }

  ngOnInit() {
      // this.sub = this.route.params
      //             .subscribe( params => {
      //               this.fromacc = params['id'];
      //               this.toacc = params['acc'];
      //               this.amount = params['amount']
      //             });
      //             console.log(this.fromacc, this.toacc,this.amount);
      console.log("communicator",this.transService.statusForTransaction);
      if(this.transService.statusForTransaction === "SUCCESS"){
        this.toggleMsg = true;
      }else{
        this.toggleMsg = false;
      }

  }

  redirectHomePage(){
      this.router.navigate(["/products"]);
  }
}
