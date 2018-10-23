import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
   <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{



  constructor(){}
//Assume we call a service which gives us the data
  ngOnInit(){


  }
}
