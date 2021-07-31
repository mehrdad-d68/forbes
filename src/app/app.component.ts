import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('openclose',[
      state('open',style({
        display:'block'
      })),
      state('closed',style({
        display:'none'
      })),
      transition('open=>closed',[
        animate(0)
      ]),
      transition('closed=>open',[
        animate(0)
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'forbes2';

  menu:boolean=false
  drop:boolean=false
  rig:string='U.S'
  openmenu(){
    this.menu=!this.menu

  }
  dropdown(){
    this.drop=!this.drop
  }
  
  region(r:string){
    this.rig=r
    this.drop=!this.drop
  }

}
