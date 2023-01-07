import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Component/header/header.component';
import { LoansComponent } from './Component/loans/loans.component';
import { FooterComponent } from './Component/footer/footer.component';
import { CreditCardComponent } from './Component/credit-card/credit-card.component';
import { DebitCardComponent } from './Component/debit-card/debit-card.component';
import { NewCreditComponent } from './Component/new-credit/new-credit.component';
import { BankTransferComponent } from './Component/bank-transfer/bank-transfer.component';
import { CurrentAccountComponent } from './Component/current-account/current-account.component';
import { PrivacyAndPolicyComponent } from './Component/privacy-and-policy/privacy-and-policy.component';
import { HomeComponent } from './Component/home/home.component';
import { UserServiceService } from './Service/user-service.service';
import { AddNewPayeeComponent } from './Component/add-new-payee/add-new-payee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExistingPayeesComponent } from './Component/existing-payees/existing-payees.component';
import { TransactionDetailsComponent } from './Component/transaction-details/transaction-details.component';
import { HlApplynowComponent } from './Component/hl-applynow/hl-applynow.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { OnlineAssistComponent } from './Component/online-assist/online-assist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './Component/chat/chat.component';
import { ChatbotModelComponent } from './Component/chatbot-model/chatbot-model.component';
import { EmailServiceComponent } from './Component/email-service/email-service.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { BankStatementComponent } from './Component/bank-statement/bank-statement.component';
import { ChequebookRequestComponent } from './Component/chequebook-request/chequebook-request.component';
import { DeclarationComponent } from './Component/declaration/declaration.component';
import { EmiOptionsComponent } from './Component/emi-options/emi-options.component';
import { EmploymentDetailsComponent } from './Component/employment-details/employment-details.component';
import { FeedbackFormComponent } from './Component/feedback-form/feedback-form.component';
import { HelpComponent } from './Component/help/help.component';
import { IncomeTaxReturnComponent } from './Component/income-tax-return/income-tax-return.component';
import { Pdcheck1Component } from './Component/pdcheck1/pdcheck1.component';
import { Pdcheck2Component } from './Component/pdcheck2/pdcheck2.component';
import { Pdcheck3Component } from './Component/pdcheck3/pdcheck3.component';
import { PersonalDetailsComponent } from './Component/personal-details/personal-details.component';
import { Proceed1Component } from './Component/proceed1/proceed1.component';
import { ProceedComponent } from './Component/proceed/proceed.component';
import { ProceedInbetweenComponent } from './Component/proceed-inbetween/proceed-inbetween.component';
import { ProfileReadyComponent } from './Component/profile-ready/profile-ready.component';
import { SuccessHomeloanComponent } from './Component/success-homeloan/success-homeloan.component';
import { SuccessVehicleloanComponent } from './Component/success-vehicleloan/success-vehicleloan.component';
import { VlDeclarationComponent } from './Component/vl-declaration/vl-declaration.component';
import { VlEmiOptionsComponent } from './Component/vl-emi-options/vl-emi-options.component';
import { VlApplynowComponent } from './Component/vl-applynow/vl-applynow.component';
import { BasicInformationComponent } from './Component/basic-information/basic-information.component';
import { ContactInformationComponent } from './Component/contact-information/contact-information.component';
import { HomeLoanComponent } from './Component/home-loan/home-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    LoansComponent,
    FooterComponent,
    CreditCardComponent,
    NewCreditComponent,
    BankTransferComponent,
    CurrentAccountComponent,
    PrivacyAndPolicyComponent,
    HomeComponent,
    AddNewPayeeComponent,
    ExistingPayeesComponent,
    TransactionDetailsComponent,
    DebitCardComponent,
    HlApplynowComponent,
    NavbarComponent,
    ChatComponent,
    ChatbotModelComponent,
    EmailServiceComponent,
    AboutUsComponent,
    BankStatementComponent,
    ChequebookRequestComponent,
    DeclarationComponent,
    EmiOptionsComponent,
    EmploymentDetailsComponent,
    FeedbackFormComponent,
    HelpComponent,
    IncomeTaxReturnComponent,
    Pdcheck1Component,
    Pdcheck2Component,
    Pdcheck3Component,
    PersonalDetailsComponent,
    Proceed1Component,
    ProceedComponent,
    ProceedInbetweenComponent,
    ProfileReadyComponent,
    SuccessHomeloanComponent,
    SuccessVehicleloanComponent,
    VlDeclarationComponent,
    VlEmiOptionsComponent,
    VlApplynowComponent,
    BasicInformationComponent,
    ContactInformationComponent,
    HomeLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
