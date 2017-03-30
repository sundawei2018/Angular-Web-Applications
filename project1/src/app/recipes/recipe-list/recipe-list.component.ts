import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test', 'this is a test','https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAbWAAAAJDhmOTYyNmJmLTBlYjMtNGQ1OC05YTgxLTgwODI5MjE1YTQ2NA.png')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
