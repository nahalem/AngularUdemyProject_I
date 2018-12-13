import { Ingredient } from "app/shared/models/ingredients.model";

export class Recipe {
  name: string;
  description: string
  imageUrl: string;
  ingredients: Ingredient[];

  constructor(name: string, description: string, imageUrl: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}
