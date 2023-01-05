import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {User} from '../Models/user';
import {map} from 'rxjs';
import {Subject} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Account } from '../Models/account';
import { Payee } from '../Models/payee';
import { Cardapply } from '../Models/cardapply';
import { TransactionDetails } from '../Models/transaction-details';
import { Loans } from '../Models/loans';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = "http://localhost:5293/";
   customer_id: any=0;
   currentUser : BehaviorSubject<any> = new BehaviorSubject(null);
   c : Subject<number> = new Subject();
   jwtHelperService = new JwtHelperService();
   get getc(): Subject<number>{
    return this.c;
   }
   set setc(s: Subject<number>){
    this.c = s;
   }

  constructor(private http : HttpClient) { 

  }
  changec(n:number){
this.c.next(n);
  }
  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl + 'User').pipe(map(res=>res));
  }

  getUserById(id: number) : Observable<User>{
    return this.http.get<User>(this.apiUrl + 'User/GetEmpById/' + id);
  }

  login(username: string, password: string){
    console.log("login function");
   return this.http.post(this.apiUrl + 'User/login?username='+username+'&password='+password,{username, password},{responseType:'text'});
  }
  setToken(token: string)
  {
    localStorage.setItem("access_token", token);
    this.loadCurrentUser();
  }
  loadCurrentUser(){
   const token = localStorage.getItem("access_token");
   console.log(token);
   const userInfo = token!=null? this.jwtHelperService.decodeToken(token) : null;
   console.log(userInfo);
   console.log(userInfo.customerId);
   const data = userInfo? {
    id: userInfo.customerId,
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email : userInfo.email,
    username: userInfo.username
   } : null;

   this.currentUser.next(data);
  }
  isLoggedin() : boolean{
return localStorage.getItem("access_token") ? true : false;
  }
  removeToken(){
    localStorage.removeItem("access_token");
  }

  getUserByEmail(email: string): Observable<User>{
    return this.http.get<User>(this.apiUrl +"User/getUserByEmail?email=" + email);
  }
 getAccount( acc : string) : Observable<Account>{
  return this.http.get<Account>(this.apiUrl+ "User/getAccount?acc=" + acc);
 }
  
 getAccountById(id : number) : Observable<Account>{
  return this.http.get<Account>(this.apiUrl + "User/getAccountById?id=" + id);
 }

 addPayee(payee: Payee)
 {
  return this.http.post(this.apiUrl + "User/AddPayee", payee);
 }

 getAllPayees(sender: number): Observable<Payee[]>{
  return this.http.get<Payee[]>(this.apiUrl + "User/getAllPayess?sender=" + sender);
 }
 tCredit(amount: number, customer_id: number)
 {
  return this.http.get(this.apiUrl + "User/transaction_credit?amount=" + amount + "&customer_id="+ customer_id);
 }
 tDebit(amount: number, customer_id : number) : Observable<boolean>
 {
  return this.http.get<boolean>(this.apiUrl + "User/transaction_debit?amount="+ amount + "&customer_id=" + customer_id);
 }

cardApply(cardapply:Cardapply ){
return this.http.post(this.apiUrl + "User/AddCard", cardapply);
}

addTransaction(TransactionDetails: TransactionDetails){
  return this.http.post(this.apiUrl + "User/AddTransaction", TransactionDetails);
}

getAllTransactions(): Observable<TransactionDetails[]>{
  return this.http.get<TransactionDetails[]>(this.apiUrl + "User/GetAllTransactions");
}
 
getUserTransactions(customer_id: number): Observable<TransactionDetails[]>{
  return this.http.get<TransactionDetails[]>(this.apiUrl + "User/GetUserTransactions?id=" + customer_id);
}

addLoan(loan: Loans)
{
  return this.http.post(this.apiUrl + "User/AddLoan", loan );
}
}
 