import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from "./../../../shared/models/ingredients.model";
import { ShoppingListService } from 'app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // Oczywicie tutaj robione jest to za pomocą dyrektyw ale normalnie na projektach robimy binding modelu do pól na formularzach. [(ngModel)] = "propertyName"
  @ViewChild('namedInput') namedInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  ingredient: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {
  }

  onAddItem() : void {
    // let namedInput = this.namedInputRef.nativeElement.value;
    // let amountInput = this.amountInputRef.nativeElement.value;
    // this.ingredient = new Ingredient(namedInput, amountInput);
    // console.log('app-shopping-edit: onAddItem()');
    // console.log(this.namedInputRef);
    // console.log(this.amountInputRef);
    // console.log(namedInput);
    // console.log(amountInput);
    // console.log(this.ingredient);
    // this.ingredientAdded.emit(this.ingredient);
    this.shoppingListService.addIngredient(this.ingredient);
  };

}
