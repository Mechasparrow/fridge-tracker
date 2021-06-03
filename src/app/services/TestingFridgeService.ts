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

    removeFridgeItem(item: FridgeItem): Promise<FridgeItem> {
        throw new Error('Method not implemented.');
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