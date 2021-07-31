import { Component, OnInit } from '@angular/core';
import { popular,editors } from 'src/db-data';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pop=popular
  news:boolean=true
  edits=editors

  shownews(e:any){
    if(e===1 ){
       this.news=true
    }else if(e===2){
      this.news=false
    }
  }

}
