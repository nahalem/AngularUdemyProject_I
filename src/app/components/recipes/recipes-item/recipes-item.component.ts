import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../models/recipe.model";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() @Output() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) : void{
      this.recipeSelected.emit();
      console.log(recipe);
  };

}
