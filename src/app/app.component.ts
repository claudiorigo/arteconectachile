import { Component } from '@angular/core';

declare var $:any;
declare function initPageEcommerce([]):any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  constructor(){
    setTimeout(() => {
      initPageEcommerce($);
    }, 50);
  }
}
