import { Component, OnInit } from '@angular/core';
import { AbstractFridgeService } from 'src/app/services/AbstractFridgeService';
import { TestingFridgeService } from 'src/app/services/TestingFridgeService';
import {FridgeItem} from 'src/app/models/FridgeItem';

@Component({
  selector: 'app-view-fridge',
  templateUrl: './view-fridge.component.html',
  styleUrls: ['./view-fridge.component.scss'],
  providers: [
    {provide: AbstractFridgeService, useClass: TestingFridgeService}
  ]
})
export class ViewFridgeComponent implements OnInit {

  private _fridgeService: AbstractFridgeService;
  public items: FridgeItem[] = [];

  ngOnInit(): void {

  }

  constructor(private fridgeService: AbstractFridgeService) {
    this._fridgeService = fridgeService;

    this.updateFridgeItems();
  }

  public async updateFridgeItems(){
    let retrievedItems = await this._fridgeService.getFridgeItems();
    this.items = retrievedItems;

    console.log("Items retrieved!");
    console.log(this.items);
  }


}
