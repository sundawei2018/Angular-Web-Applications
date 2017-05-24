import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // add a decorator to get data from outside
  @Input() recipe: Recipe;
  // listen to this event from outside
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
