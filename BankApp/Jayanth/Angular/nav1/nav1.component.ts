import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component{
  bool1:boolean;
  bool2:boolean;
  bool3:boolean;
  bool4:boolean;

  call1(){
    this.bool1 = !this.bool1;
  }
  
  
  call2(){
    this.bool2 = !this.bool2;
  }
  
  call3(){
    this.bool3 = !this.bool3;
  }
  
  call4(){
    this.bool4 = !this.bool4;
  }
}
