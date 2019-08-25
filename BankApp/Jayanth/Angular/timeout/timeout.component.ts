import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css']
})
export class TimeoutComponent implements OnInit {
  count:number=3*60;
  x:any;
  timeout:TimeoutComponent;
  constructor() {
  }

  ngOnInit(){
    window.setInterval(this.eventhandler,1000);
    // console.log(this.x);
    
    window.addEventListener("click",this.handler1);
    window.addEventListener("keyup",this.handler1);

    // window.addEventListener("mouseover",this.handler1); 
      sessionStorage.setItem("count","3000");
    var e:Event = window.event;
    console.log(e);  
   }

   public handler1(){
     console.log("clicked");
     this.count = 3*60;
     
    // onclick.bind( window.clearTimeout(this.x)  );
   
  }

   public eventhandler(){
     this.count=this.count-1;
     console.log(this.count)
     if(this.count==0){
     window.alert("Session timed out");
     }
   }


}
