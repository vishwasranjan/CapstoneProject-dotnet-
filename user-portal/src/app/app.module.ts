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
    NavbarComponent
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
