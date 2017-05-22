import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // add a decorator to get data from outside
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  // listen to this event from outside
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }

}
