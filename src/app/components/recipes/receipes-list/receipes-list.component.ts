import { Component, OnInit } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { RecipeMock } from "../../../mocks/recipe.mock";

@Component({
  selector: "app-receipes-list",
  templateUrl: "./receipes-list.component.html",
  styleUrls: ["./receipes-list.component.css"]
})
export class ReceipesListComponent implements OnInit {
  recipest: Recipe[] = [];
  recipe: Recipe;
  recipeMock: RecipeMock;

  constructor() {
    this.recipeMock = new RecipeMock();
    this.recipest = this.recipeMock.getMockData();
  }

  ngOnInit() {}
}
