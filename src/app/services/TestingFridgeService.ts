import { Injectable } from '@angular/core';
import { FridgeItem } from '../models/FridgeItem';
import { AbstractFridgeService } from './AbstractFridgeService';

@Injectable()
export class TestingFridgeService implements AbstractFridgeService {
    

    private static items: FridgeItem[] = <FridgeItem[]>[
        <FridgeItem>{
            name: "Apple",
            quantity: 10,
            units: "apples",
            expirationDate: new Date(Date.UTC(2021, 5, 20))
        },
        <FridgeItem>{
            name: "Carrots",
            quantity: 5,
            units: "apples",
            expirationDate: new Date(Date.UTC(2021, 4, 20))
        },
        <FridgeItem>{
            name: "Cucombuer",
            quantity: 2,
            units: "apples",
            expirationDate: new Date(Date.UTC(2021, 5, 25))
        },
    ]

    removeFridgeItem(itemToRemove: FridgeItem): Promise<FridgeItem> {
        TestingFridgeService.items = TestingFridgeService.items.filter(item => item != itemToRemove);
        return Promise.resolve(itemToRemove);
    }

    getFridgeItems(): Promise<FridgeItem[]> {
        return Promise.resolve(TestingFridgeService.items);
    }
    
    addFridgeItem(item: FridgeItem): Promise<FridgeItem> {
        TestingFridgeService.items.push(item);
        return Promise.resolve(item);
    }
    
    checkFridgeItemExpired(item: FridgeItem): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
  
}