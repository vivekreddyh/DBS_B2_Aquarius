import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  login_id:string='';
  pwd:string='';

  constructor(public http:HttpClient) { }

  ngOnInit() {
  }
  getCalled()
  {
    this.http.get(`http://localhost:8079/rest/customer/${this.login_id}/${this.pwd}`)
    .toPromise()
      .then(
            (data)=>{console.log(data)},
            (error)=>{console.error(error)}
        )
        .catch((err)=>{
          console.log("in catch block");
        })
        .finally(()=>{console.log("in finally block")});
    
  }

}
