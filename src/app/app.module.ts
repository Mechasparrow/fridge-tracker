import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import { NavHeaderComponent } from './share/nav-header/nav-header.component';
import { ViewFridgeComponent } from './components/view-fridge/view-fridge.component';
import { FridgeViewCardComponent } from './share/fridge-view-card/fridge-view-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NewItemComponent } from './components/new-item/new-item.component';
import { MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    ViewFridgeComponent,
    FridgeViewCardComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
