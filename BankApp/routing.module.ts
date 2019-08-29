import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { CummunicatorComponent } from './cummunicator/cummunicator.component';
import { FirstComponent } from './first/first.component';

export const router: Routes = [
  { path: '' , redirectTo: 'products', pathMatch : 'full'},
  { path : 'addTransaction', component:TransactionComponent},
  { path : 'transactionSuccess/:id/:acc/:amount', component:CummunicatorComponent},
  { path: 'transferFunds',component:CummunicatorComponent},
  { path: 'commutor',component:CummunicatorComponent},
  { path: 'lastTenTransactions', component:FirstComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
