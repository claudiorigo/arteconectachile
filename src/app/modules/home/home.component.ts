import { Component, OnInit } from '@angular/core';
import { HomeService } from './_services/home.service';

declare var $:any;
declare function initPageEcommerce([]): any;
declare function hero_slider_active(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = 'ecommerce';
  sliders: any = [];
  group_categories_products: any = [];
  products_random_a: any = [];
  products_random_b: any = [];

  constructor(public _homeService: HomeService,) {}

  ngOnInit(): void {
    setTimeout(() => {
      initPageEcommerce($);
    }, 50);

    this._homeService.ecommerceHome().subscribe((resp:any) => {
      //console.log(resp);
      this.sliders = resp.sliders;
      this.group_categories_products = resp.group_categories_products;
      this.products_random_a = resp.products_random_a;
      this.products_random_b = resp.products_random_b;

      setTimeout(() => {
        hero_slider_active();
      }, 25);

    });
  }

}
