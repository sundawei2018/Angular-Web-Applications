import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test', 'this is a test','https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAbWAAAAJDhmOTYyNmJmLTBlYjMtNGQ1OC05YTgxLTgwODI5MjE1YTQ2NA.png'),
    new Recipe('B test', 'this is another test','http://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/a/3a/a3ac2583-4bf3-5a43-b71a-8ae061279d43/555de70049716.image.gif')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
