import { Component, OnInit } from '@angular/core';
import {Product} from '../modely/producty.model';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from '../service/service.component';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public product1: Product;

  constructor(private httpClient: HttpClient, private categorie: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.categorie.getProductById(params.id)
          .subscribe((products: Product) => {
            this.product1 = products;
          });
      });
  }

}
