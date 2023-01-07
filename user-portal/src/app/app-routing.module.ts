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
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ChatComponent } from './Component/chat/chat.component';
import { ChatbotModelComponent } from './Component/chatbot-model/chatbot-model.component';
import { EmailServiceComponent } from './Component/email-service/email-service.component';
import { ChequebookRequestComponent } from './Component/chequebook-request/chequebook-request.component';
import { FeedbackFormComponent } from './Component/feedback-form/feedback-form.component';
import { HelpComponent } from './Component/help/help.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { VlApplynowComponent } from './Component/vl-applynow/vl-applynow.component';
import { VlDeclarationComponent } from './Component/vl-declaration/vl-declaration.component';
import { VlEmiOptionsComponent } from './Component/vl-emi-options/vl-emi-options.component';
import { EmiOptionsComponent } from './Component/emi-options/emi-options.component';
import { SuccessHomeloanComponent } from './Component/success-homeloan/success-homeloan.component';
import { SuccessVehicleloanComponent } from './Component/success-vehicleloan/success-vehicleloan.component';
import { DeclarationComponent } from './Component/declaration/declaration.component';
import { ProfileReadyComponent } from './Component/profile-ready/profile-ready.component';
import { Pdcheck3Component } from './Component/pdcheck3/pdcheck3.component';
import { Pdcheck2Component } from './Component/pdcheck2/pdcheck2.component';
import { EmploymentDetailsComponent } from './Component/employment-details/employment-details.component';
import { Pdcheck1Component } from './Component/pdcheck1/pdcheck1.component';
import { PersonalDetailsComponent } from './Component/personal-details/personal-details.component';
import { Proceed1Component } from './Component/proceed1/proceed1.component';
import { ProceedInbetweenComponent } from './Component/proceed-inbetween/proceed-inbetween.component';
import { ProceedComponent } from './Component/proceed/proceed.component';
import { IncomeTaxReturnComponent } from './Component/income-tax-return/income-tax-return.component';
import { BankStatementComponent } from './Component/bank-statement/bank-statement.component';
import { ContactInformationComponent } from './Component/contact-information/contact-information.component';
import { BasicInformationComponent } from './Component/basic-information/basic-information.component';
import { HomeLoanComponent } from './Component/home-loan/home-loan.component';
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
    path:'hl-applynow', component: HlApplynowComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:'online-assist', component: OnlineAssistComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'navbar', component: NavbarComponent
  },
  {
    path:'chat', component: ChatComponent
  },
  {
    path:'chatbot-model', component: ChatbotModelComponent
  },
  {
    path:'email-service', component: EmailServiceComponent
  },
  {
    path:'chequebook-request', component: ChequebookRequestComponent
   },
   {
    path:'feedback-form', component: FeedbackFormComponent
   },
   {
    path:'help', component: HelpComponent
   },
   {
    path:'about-us', component: AboutUsComponent
   },
   {
    path:'vl-applynow', component: VlApplynowComponent
   },
   {
    path:'vl-declaration', component: VlDeclarationComponent
   },
   {
    path:'vl-emi-options', component: VlEmiOptionsComponent
   },
   {
    path:'success-vehicleloan', component: SuccessVehicleloanComponent
   },
   {
    path:'success-homeloan', component: SuccessHomeloanComponent
   },
   {
    path:'emi-options', component: EmiOptionsComponent
   },
   {
    path:'bank-statement', component: BankStatementComponent
   },
   {
    path:'income-tax-return', component: IncomeTaxReturnComponent
   },
   {
    path:'proceed', component: ProceedComponent
   },
   {
    path:'proceed-inbetween', component: ProceedInbetweenComponent
   },
   {
    path:'proceed1', component: Proceed1Component
   },
   {
    path:'personal-details', component: PersonalDetailsComponent
   },
   {
    path:'basic-information', component: BasicInformationComponent
   },
   {
    path:'pdcheck1', component: Pdcheck1Component
   },
   {
    path:'employment-details', component: EmploymentDetailsComponent
   },
   {
    path:'pdcheck2', component: Pdcheck2Component
   },
   {
    path:'contact-information', component: ContactInformationComponent
   },
   {
    path:'pdcheck3', component: Pdcheck3Component
   },
   {
    path:'profile-ready', component: ProfileReadyComponent
   },
   {
    path:'declaration', component: DeclarationComponent
   },
   {
    path:'home-loan', component: HomeLoanComponent
   }
 
]


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
