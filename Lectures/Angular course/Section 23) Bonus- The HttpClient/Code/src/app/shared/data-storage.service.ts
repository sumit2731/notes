import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    // return this.httpClient.put('https://ng-recipe-book-b0a6d.firebaseio.com/recipes.json?auth=' + token,
    // this.recipeService.getRecipes());
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-b0a6d.firebaseio.com/recipes.json',
    //  this.recipeService.getRecipes(), {reportProgress: true, params: new HttpParams().set('auth', token)});
    this.recipeService.getRecipes(), {reportProgress: true});
     return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();
    console.log(token);
    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-b0a6d.firebaseio.com/recipes.json?auth=' + token)
    const headers = new HttpHeaders().set('authorization', 'abcdef').append('headers2', 'value');
    this.httpClient.get<Recipe []>('https://ng-recipe-book-b0a6d.firebaseio.com/recipes.json',
    // {observe: 'body',
    //    responseType: 'json',
    //    // headers: headers})
    //    params: new HttpParams().set('auth', token)
    // })
    {observe: 'body',
       responseType: 'json',
       // headers: headers})
    })
      .map(
        (recipes) => {
          console.log(recipes);
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
          }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
