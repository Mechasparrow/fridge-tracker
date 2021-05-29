import { Injectable } from '@angular/core';
import { FridgeItem } from '../models/FridgeItem';
import { AbstractFridgeService } from './AbstractFridgeService';

@Injectable()
export class TestingFridgeService implements AbstractFridgeService {

    private items: FridgeItem[] = <FridgeItem[]>[
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

    getFridgeItems(): Promise<FridgeItem[]> {
        return Promise.resolve(this.items);
    }
    addFridgeItem(): Promise<FridgeItem> {
        throw new Error('Method not implemented.');
    }
    checkFridgeItemExpired(item: FridgeItem): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
  
}