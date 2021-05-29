import { Injectable } from '@angular/core';
import { FridgeItem } from '../models/FridgeItem';


@Injectable()
export abstract class AbstractFridgeService {
  /**
   * Returns a list of all of the current user's todos.
   */

  abstract getFridgeItems(): FridgeItem[];
  
  abstract addFridgeItem(): FridgeItem;

  abstract checkFridgeItemExpired(item: FridgeItem): boolean;

}