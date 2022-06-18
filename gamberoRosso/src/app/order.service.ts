import { Injectable } from '@angular/core';
import { Dish } from './dishes';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  items: Dish[] = [];
  
  constructor() { }

addToCart(element: Dish){
  this.items.push(element);
 
}

getElements(){
  return this.items;
}

clearCart(){
  this.items = [];
  return this.items;
}
}
