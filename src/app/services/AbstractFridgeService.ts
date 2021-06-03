import { Injectable } from '@angular/core';
import { FridgeItem } from '../models/FridgeItem';


@Injectable()
export abstract class AbstractFridgeService {
  /**
   * Returns a list of all of the current user's todos.
   */

  abstract  getFridgeItems(): Promise<FridgeItem[]>;
  
  abstract addFridgeItem(item: FridgeItem): Promise<FridgeItem>;

  abstract removeFridgeItem(item: FridgeItem): Promise<FridgeItem>;

  abstract checkFridgeItemExpired(item: FridgeItem): Promise<boolean>;

}