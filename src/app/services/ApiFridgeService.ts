import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FridgeItem } from '../models/FridgeItem';
import { AbstractFridgeService } from './AbstractFridgeService';

import {map} from 'rxjs/operators';

@Injectable()
export class ApiFridgeService implements AbstractFridgeService {

    constructor(private http: HttpClient)
    {
        
    }

    getFridgeItems(): Promise<FridgeItem[]> {
        return this.http.get<any[]>("http://127.0.0.1:8000/v1").pipe(
            map((items: any[]) => {
                return items.map(item => {
                   
                    item.expirationDate = new Date(Date.parse(item.expirationDate));
                    console.log(item.expirationDate)
                    console.log(item.expirationDate.getDay());
                    return <FridgeItem>item;
                })
            })
        ).toPromise();
    }

    addFridgeItem(item: FridgeItem): Promise<FridgeItem> {
        throw new Error('Method not implemented.');
    }
    removeFridgeItem(item: FridgeItem): Promise<FridgeItem> {
        throw new Error('Method not implemented.');
    }
    checkFridgeItemExpired(item: FridgeItem): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

  
}