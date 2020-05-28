import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../service/service.component';
import {HttpClient} from '@angular/common/http';
import {categorieinfo} from '../modely/categorieinfo.model';
import {Product} from '../modely/producty.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categories: categorieinfo;
  public productyy: Product[];

  constructor(private httpClient: HttpClient, private categorie: CategoryService, private route: ActivatedRoute, private router: Router) {
  }

  getLink(id) {
    this.router.navigate(['/products'], {queryParams: {id}});
  }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.categorie.getCategoryById(params.id)
          .subscribe((category: categorieinfo) => {
            this.categories = category;
            this.productyy = category.products;
            console.log(this.productyy);
          });
      });

  }
}
