import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AddressbookComponent } from './addressbook/addressbook.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  {path: "", component: AccountHomeComponent},
  {path: "orders", component: OrderHistoryComponent},
  {path: "address", component: AddressbookComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
