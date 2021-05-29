import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFridgeComponent } from './components/view-fridge/view-fridge.component';

const routes: Routes = [
  {path: '', component: ViewFridgeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
