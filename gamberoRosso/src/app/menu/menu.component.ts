import { Component, OnInit } from '@angular/core';
import { Dish, dishes } from '../dishes';
import { OrderService } from '../order.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  plates: Dish[] = dishes;
  plate: Dish = {} as Dish;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.orderService.addToCart(this.plate);
    console.log(this.orderService.items)
  }



}

