import { Component } from '@angular/core';
import {Category} from './modely/categorie.model';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from './service/service.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custombootstrap1';

  public pole: Category[];

  constructor(private httpClient: HttpClient, private categorie: CategoryService, private router: Router) {
    this.categorie.getCategories()
      .subscribe(
        (data: Category[]) => {
          this.pole = data;
        }, (error) =>  {
          console.log(error);
        }
      );
  }

  getLink(id) {
    this.router.navigate(['/category'], {queryParams: {id}});
  }
}
