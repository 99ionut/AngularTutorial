import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})
export class ProductslistComponent {
  constructor(private store: ProductsService){

  }

  products: any[] = [];

  ngOnInit(): void{
    this.store.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

}
