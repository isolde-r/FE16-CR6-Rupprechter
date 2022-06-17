import { Component, OnInit } from '@angular/core';
import { Dish, dishes } from '../dishes';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  plates: Dish[] = dishes;
  constructor() { }

  ngOnInit(): void {
  }



}

