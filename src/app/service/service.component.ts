import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Token from '../klic/key';
import {Category} from '../modely/categorie.model';
import {categorieinfo} from '../modely/categorieinfo.model';
import {Product} from '../modely/producty.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private httpClient: HttpClient) {

  }

  getCategories() {
    const headers = new HttpHeaders().set('access-token', Token.access_token);
    return this.httpClient.get<Category[]>('api/categories/', {headers});
  }

  getCategoryById(id: number) {
    const headers = new HttpHeaders().set('access-token', Token.access_token);
    return this.httpClient.get<categorieinfo>('api/categories/' + id, {headers});
  }

  getProductById(id: number) {
    const headers = new HttpHeaders().set('access-token', Token.access_token);
    return this.httpClient.get<Product>('api/products/' + id, {headers});
  }
}
