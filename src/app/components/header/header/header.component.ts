import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { MenuItem } from "primeng/primeng";
import { MegaMenuModule } from "primeng/primeng";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  @Output() featureSelected = new EventEmitter<string>();

  constructor() {
    this.items = new Array<MenuItem>();
  }

  ngOnInit() {
    this.items = [
      {
        label: "Menu",
        icon: "fa fa-fw fa-check",
        items: [
          [
            {
              label: "Prime NG Playground",
              items: [
                { label: "Prime NG Module", routerLink: "/prime-module" },
                { label: "Prime NG component", routerLink: "/prime-ng-ex1" }
              ]
            },
            // {
            //   label: "NA",
            //   items: [{ label: "TV 3.1" }, { label: "TV 3.2" }]
            // },
          ],
          [
            {
              label: "UDEMY - 1 Project",
              items: [
                { label: "Recipes", routerLink: "/recipes" },
                { label: "Recipes Details", routerLink: "/recipesDetail" },
                { label: "Recipes Item", routerLink: "/recipesItem" },
                { label: "Recipes List", routerLink: "/recipesList" },
                { label: "Shooping Edit", routerLink: "/shoppingEdit" },
                { label: "Shooping List", routerLink: "/shoppingList" }]
            },
            // {
            //   label: "NA",
            //   items: [{ label: "TV 4.1" }, { label: "TV 4.2" }]
            // }
          ],
          [
            {
              label: "My Playground",
              items: [
                { label: "Component communication", routerLink: "/components-communication" },
              ]
            },
            // {
            //   label: "NA",
            //   items: [{ label: "TV 3.1" }, { label: "TV 3.2" }]
            // },
          ],
        ]
      },
      // {
      //   label: "Sports",
      //   icon: "fa fa-fw fa-soccer-ball-o",
      //   items: [
      //     [
      //       {
      //         label: "Sports 1",
      //         items: [{ label: "Sports 1.1" }, { label: "Sports 1.2" }]
      //       },
      //       {
      //         label: "Sports 2",
      //         items: [{ label: "Sports 2.1" }, { label: "Sports 2.2" }]
      //       }
      //     ],
      //     [
      //       {
      //         label: "Sports 3",
      //         items: [{ label: "Sports 3.1" }, { label: "Sports 3.2" }]
      //       },
      //       {
      //         label: "Sports 4",
      //         items: [{ label: "Sports 4.1" }, { label: "Sports 4.2" }]
      //       }
      //     ],
      //     [
      //       {
      //         label: "Sports 5",
      //         items: [{ label: "Sports 5.1" }, { label: "Sports 5.2" }]
      //       },
      //       {
      //         label: "Sports 6",
      //         items: [{ label: "Sports 6.1" }, { label: "Sports 6.2" }]
      //       }
      //     ]
      //   ]
      // }
    ];
  }

  onSelect(feature: string): void {
    console.log(feature);
    this.featureSelected.emit(feature);
  }
}
