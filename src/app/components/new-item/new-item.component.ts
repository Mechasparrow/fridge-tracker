import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FridgeItem } from 'src/app/models/FridgeItem';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  expirationDate: Date = new Date(Date.now());

  itemForm = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
    units: new FormControl(''),
    expirationDate: new FormControl(new Date(Date.now()))  
  });

  constructor() { }

  ngOnInit(): void {
    this.itemForm.get("expirationDate")?.valueChanges.subscribe((value) => {
      this.expirationDate = new Date(value);
      console.log(this.expirationDate);
    })
  }

  onSubmit(): void {

    var item: FridgeItem = this.buildItem(this.itemForm);

    console.log(item);
  }

  private buildItem(itemForm: FormGroup): FridgeItem {
    var mappedItem = <FridgeItem>(itemForm.value);
    return mappedItem;
  }

}
