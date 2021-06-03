import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { FridgeItem } from 'src/app/models/FridgeItem';
import { AbstractFridgeService } from 'src/app/services/AbstractFridgeService';
import { TestingFridgeService } from 'src/app/services/TestingFridgeService';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
  providers: [
    {provide: AbstractFridgeService, useClass: TestingFridgeService}
  ]
})
export class NewItemComponent implements OnInit {

  expirationDate: Date = new Date(Date.now());

  itemForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    quantity: new FormControl('',[Validators.required, Validators.min(0)]),
    units: new FormControl('',[Validators.required]),
    expirationDate: new FormControl(new Date(Date.now()),[Validators.required])  
  });


  constructor(private fridgeService: AbstractFridgeService, private snackBar: MatSnackBar) {}

  openSnack(){
    this.snackBar.open("Food Item Added!", "Close");
  }

  ngOnInit(): void {
    this.itemForm.get("expirationDate")?.valueChanges.subscribe((value) => {
      this.expirationDate = new Date(value);
      console.log(this.expirationDate);
    })
  }

  async onSubmit(): Promise<void> {

    var item: FridgeItem = this.buildItem(this.itemForm);
    await this.fridgeService.addFridgeItem(item);
    this.openSnack();
  }

  private buildItem(itemForm: FormGroup): FridgeItem {
    var mappedItem = <FridgeItem>(itemForm.value);
    return mappedItem;
  }

}
