import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Dish } from '../dishes';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cartItems: Dish[] = [];
  totalProd: number = 0;
  totalSum: number = 0;
  service: number = 0;
  discount: number = 0;
  constructor(private orderServ: OrderService) { }

  checkOutForm = new FormGroup({
    name: new FormControl(""),
    address: new FormControl(""),
    phone: new FormControl(""),
    email: new FormControl("")
  })

  onPurchase() {
    this.cartItems = this.orderServ.clearCart();
    this.checkOutForm.reset();
  }

  ngOnInit(): void {
    this.cartItems = this.orderServ.getElements();
    this.totalProd = this.orderServ.calcTotalProd();
    this.service = this.orderServ.calcService();
    this.discount = this.orderServ.calcDiscount();
    this.totalSum = this.orderServ.calcTotalSum();
  }

}
