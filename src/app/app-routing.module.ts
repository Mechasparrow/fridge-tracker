import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFridgeComponent } from './components/view-fridge/view-fridge.component';
import { NewItemComponent } from './components/new-item/new-item.component';

const routes: Routes = [
  {path: '', component: ViewFridgeComponent},
  {path: 'new-item', component: NewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
