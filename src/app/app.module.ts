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
