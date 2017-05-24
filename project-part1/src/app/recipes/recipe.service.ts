import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe('A test',
    'this is a test',
    'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAbWAAAAJDhmOTYyNmJmLTBlYjMtNGQ1OC05YTgxLTgwODI5MjE1YTQ2NA.png',
    [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
    ]),
    new Recipe('B test',
    'this is another test',
    'http://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/a/3a/a3ac2583-4bf3-5a43-b71a-8ae061279d43/555de70049716.image.gif',
    [
        new Ingredient('Buns', 2),
        new Ingredient('Meat',1)
    ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
  }

}