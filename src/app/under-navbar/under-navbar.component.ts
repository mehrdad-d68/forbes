import { Component, OnInit  } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {breaking} from '../../db-data'

@Component({
  selector: 'app-under-navbar',
  templateUrl: './under-navbar.component.html',
  styleUrls: ['./under-navbar.component.scss'],
  animations:[
    trigger('next',[
      state('next',style({
        opacity: '1'
      })),
      state('before',style({
        opacity:'0'
      })),
      transition('next=>before',[
        animate('1s')
      ]),
      transition('before=>next',[
        animate('1s')
      ]),
    ]),
  ],
})
export class UnderNavbarComponent implements OnInit {

  constructor() { }
  breakingnews=breaking.slice(0,4)
  ngOnInit(): void {
    
  }
  
  t:boolean=true
  i=0;
  left(){
    this.t=false
    setTimeout(() => {
      this.t=true
      this.i=this.i-3
      if(this.i<0){
        this.i=breaking.length-1
      }
      this.breakingnews=breaking.slice(this.i,this.i+4)
      console.log(this.i)   
    }, 1000);

  }
  right(){
    this.t=false
    setTimeout(() => {
      this.t=true
      this.i=this.i+3
      if(this.i>breaking.length){
        this.i=0
      }
      this.breakingnews=breaking.slice(this.i,this.i+4)
      console.log(this.i)
    }, 1000);
  }
 
  


}
