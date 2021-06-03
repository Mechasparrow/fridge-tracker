import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FridgeItem } from 'src/app/models/FridgeItem';

@Component({
  selector: 'FridgeViewCard',
  templateUrl: './fridge-view-card.component.html',
  styleUrls: ['./fridge-view-card.component.scss']
})
export class FridgeViewCardComponent implements OnInit {

  @Input() public itemToView: FridgeItem = <FridgeItem>{
    name: "",
    quantity: 0,
    units: "",
    expirationDate: new Date(Date.UTC(2000,12,12))
  };

  @Output() deleteItem: EventEmitter<FridgeItem> = new EventEmitter<FridgeItem>();

  constructor() { 

  }

  prettyDate(): string{
    let month = this.itemToView.expirationDate.getMonth().toString();
    let day = this.itemToView.expirationDate.getDay().toString();
    let year = this.itemToView.expirationDate.getFullYear().toString();

    return `${month}/${day}/${year}`;
  }

  ngOnInit(): void {

  }

  remove(): void {
    this.deleteItem.emit(this.itemToView);
  }

}
