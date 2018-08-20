import { Recipe } from "./../components/recipes/models/recipe.model";
import { IMock } from "./mock.interface";

export class RecipeMock implements IMock<Recipe> {

  private data: Recipe[] = [];

  constructor() {
    this.createMock();
  }

  private createMock(): void {
    this.data = new Array<Recipe>(
      new Recipe(
        "Test Recipe",
        "This is simply a test",
        "https://pbs.twimg.com/profile_images/980544485108064256/jfiHHXbR_400x400.jpg"
      )
    );
  }

  public getMockData(): Array<Recipe> {
    console.log(this.data);
    return this.data;
  }

  public addMockData(item: Recipe): void {
    if(item === null || item === undefined)
    {
      return;
    }

    this.data.push(item);
  }
}
