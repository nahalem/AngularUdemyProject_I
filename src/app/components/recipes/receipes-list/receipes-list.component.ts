import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { RecipeService } from "app/services/recipe.service";

@Component({
  selector: "app-receipes-list",
  templateUrl: "./receipes-list.component.html",
  styleUrls: ["./receipes-list.component.css"]
})
export class ReceipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService
  ) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }
}
