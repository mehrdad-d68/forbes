import { Component, OnInit } from '@angular/core';
import { pic  } from 'src/assets/config';
import {trigger,  state,  style,  animate,  transition} from '@angular/animations';



@Component({
  selector: 'app-under-quote',
  templateUrl: './under-quote.component.html',
  styleUrls: ['./under-quote.component.scss'],

})
export class UnderQuoteComponent implements OnInit {
  x=0
  pics=pic.slice(this.x,this.x+3)
  isopen=false
  n=pic
  news=false
  news2=false
  constructor() { }

  ngOnInit(): void {
  }

  change(e:number){
    if(e===1) {
      this.news=true
    }else {
      this.news2=true
    }
    
    this.x=this.x+e 
    if(this.x<0){
      this.x=pic.length-3
    }

 
    if(this.x+3>pic.length){
      this.x=0
      this.pics[2]=pic[2]
    }
    setTimeout(()=>{
      this.news2=false
      this.news=false
      this.pics=pic.slice(this.x,this.x+3)
    },1000)

    }
  }

