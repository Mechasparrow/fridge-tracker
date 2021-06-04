import { Component, OnInit } from '@angular/core';
import { AbstractFridgeService } from 'src/app/services/AbstractFridgeService';
import { TestingFridgeService } from 'src/app/services/TestingFridgeService';
import {FridgeItem} from 'src/app/models/FridgeItem';
import { ApiFridgeService } from 'src/app/services/ApiFridgeService';

@Component({
  selector: 'app-view-fridge',
  templateUrl: './view-fridge.component.html',
  styleUrls: ['./view-fridge.component.scss'],
  providers: [
    //{provide: AbstractFridgeService, useClass: TestingFridgeService}
    {provide: AbstractFridgeService, useClass: ApiFridgeService}
  ]
})
export class ViewFridgeComponent implements OnInit {

  public items: FridgeItem[] = [];

  ngOnInit(): void {

  }

  constructor(private fridgeService: AbstractFridgeService) {
  
    this.updateFridgeItems();
  }

  public async updateFridgeItems(){
    let retrievedItems = await this.fridgeService.getFridgeItems();
    this.items = retrievedItems;

    console.log("Items retrieved!");
    console.log(this.items);
  }

  public async removeFridgeItem(item:FridgeItem){
    let removedItem = await this.fridgeService.removeFridgeItem(item);
    this.updateFridgeItems();
  }


}
