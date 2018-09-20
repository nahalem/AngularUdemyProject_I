import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { RecipeMock } from "../../../mocks/recipe.mock";

@Component({
  selector: "app-receipes-list",
  templateUrl: "./receipes-list.component.html",
  styleUrls: ["./receipes-list.component.css"]
})
export class ReceipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipest: Recipe[] = [];
  recipeItem: Recipe;
  recipeMock: RecipeMock;

  constructor() {
    this.recipeMock = new RecipeMock();
    this.recipest = this.recipeMock.getMockData();
  }

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) : void{
    this.recipeWasSelected.emit(recipe);
  };
}
