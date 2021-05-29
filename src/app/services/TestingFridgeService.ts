import { Injectable } from '@angular/core';
import { FridgeItem } from '../models/FridgeItem';
import { AbstractFridgeService } from './AbstractFridgeService';

@Injectable()
export class TestingFridgeService implements AbstractFridgeService {
    getFridgeItems(): FridgeItem[] {
        throw new Error('Method not implemented.');
    }
    addFridgeItem(): FridgeItem {
        throw new Error('Method not implemented.');
    }
    checkFridgeItemExpired(item: FridgeItem): boolean {
        throw new Error('Method not implemented.');
    }
}