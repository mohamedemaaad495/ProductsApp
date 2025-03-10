import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  catList:ICategory[];
  productList: IProduct[];
  selectedcatID: number = 0;
  orderTotalPrice: number = 0;
  constructor() {
    this.catList = [
      {id:1,name:'Laptops'},
      {id:2,name:'Tablets'},
      {id:3,name:'Mobiles'}
    ]
    this.productList = [
      { id: 100, name: 'laptop', price: 1000, quantity: 1, imgUrl: 'https://picsum.photos/350/200', categoryId: 1 },
      { id: 200, name: 'tablet', price: 2000, quantity: 2, imgUrl: 'https://picsum.photos/350/200', categoryId: 2 },
      { id: 300, name: 'iphone', price: 3000, quantity: 3, imgUrl: 'https://picsum.photos/350/200', categoryId: 3 },
      { id: 400, name: 'ay7aga', price: 4000, quantity: 4, imgUrl: 'https://picsum.photos/350/200', categoryId: 4 },
      { id: 500, name: 'ay7aga2', price: 5000, quantity: 5, imgUrl: 'https://picsum.photos/350/200', categoryId: 5 },
      { id: 600, name: 'ay7aga3', price: 6000, quantity: 6, imgUrl: 'https://picsum.photos/350/200', categoryId: 6 }
    ];
  }

  ngOnInit(): void {
  }
  buy(productPrice: number, count: any) {

    //this.orderTotalPrice = parseInt(count) * productPrice;
    // this.orderTotalPrice = Number(count)* productPrice;
    this.orderTotalPrice = +count * productPrice;
    // let itemsCount: number;
    // itemsCount = parseInt(count); 
    // itemsCount = Number(count);
    // itemsCount = count as number;
    // itemsCount = +count + 10;
    // itemsCount = +count + 10;

  }
  Changecat(){
    this.selectedcatID = 1;
  }
}
