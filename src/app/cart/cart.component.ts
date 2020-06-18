import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../service/service.component';
import {Product} from '../modely/producty.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public arr = [];


  constructor(private activatedRoute: ActivatedRoute, private products: CategoryService) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(i => {
      this.products.getProductById(i.id).subscribe((data: Product) => {
        console.log(data);
        this.arr.push(data);
        localStorage.setItem('product', JSON.stringify(this.arr));
        const jsonProduct = localStorage.getItem('product');
        this.arr = JSON.parse(jsonProduct);
      });
    });
    const jsonProduct2 = localStorage.getItem('product');
    this.arr = JSON.parse(jsonProduct2);
  }

}
