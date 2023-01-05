import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoansComponent } from './Component/loans/loans.component';
import { DebitCardComponent } from './Component/debit-card/debit-card.component';
import { CreditCardComponent } from './Component/credit-card/credit-card.component';
//import { NewUserComponent } from './Component/new-user/new-user.component';
import { TermsAndConditionComponent } from './Component/terms-and-condition/terms-and-condition.component';
import { HomeComponent } from './Component/home/home.component';
import { PrivacyAndPolicyComponent } from './Component/privacy-and-policy/privacy-and-policy.component';
import { BankTransferComponent } from './Component/bank-transfer/bank-transfer.component';
import { AuthGuardGuard } from './Service/auth-guard.guard';
import { AddNewPayeeComponent } from './Component/add-new-payee/add-new-payee.component';
import { ExistingPayeesComponent } from './Component/existing-payees/existing-payees.component';
import { TransactionDetailsComponent } from './Component/transaction-details/transaction-details.component';
import { HlApplynowComponent } from './Component/hl-applynow/hl-applynow.component';
import { OnlineAssistComponent } from './Component/online-assist/online-assist.component';
const routes: Routes=[
   
  {
    path: 'login', component:LoginComponent
  },
 
  {
    path: '', redirectTo:"login", pathMatch:'full'
  },

  // {
  //   path: 'new-user', component:NewUserComponent
  // },
  
  {
    path:'dashboard', component:DashboardComponent,
    canActivate: [AuthGuardGuard]
  },
 
  {
    path:'loans',component:LoansComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:'debit-card',component:DebitCardComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:'credit-card',component:CreditCardComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:'terms-and-condition',component:TermsAndConditionComponent
  },
  {
    path: 'home', component:HomeComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'privacy-and-policy', component:PrivacyAndPolicyComponent
  },
  {
    path: 'bank-transfer', component:BankTransferComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:'add-new-payee', component: AddNewPayeeComponent,
    canActivate: [AuthGuardGuard]
  },

  {
    path:'existing-payees', component: ExistingPayeesComponent,
    canActivate: [AuthGuardGuard]
  },

  {
    path:'transaction-details', component: TransactionDetailsComponent,
    canActivate: [AuthGuardGuard]
  },

  {
    path:'home-loan', component: HlApplynowComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:'online-assist', component: OnlineAssistComponent,
    canActivate: [AuthGuardGuard]
  }
  

 
]


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
