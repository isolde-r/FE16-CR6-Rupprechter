import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Dish } from '../dishes';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cartItems: Dish[] = [];
  constructor(private orderServ: OrderService) { }

  ngOnInit(): void {
    this.cartItems = this.orderServ.getElements();
  }

}
