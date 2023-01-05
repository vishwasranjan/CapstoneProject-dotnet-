export class Account {
    customerId:number=0;
    accountNo:string="";
    ifsC_Code:string="";
    accountType:string="";
    accountBalance:number=0;
    branch:string="";
    
  static lastname: any;
​
    constructor(customerid:number, accountnum:string, ifsc_code:string, branch:string, accounttype:string, accountbal:number){
        this.customerId=customerid;
        this.accountNo=accountnum;
        this.ifsC_Code=ifsc_code;
        this.branch=branch;
        this.accountType=accounttype;
        this.accountBalance=accountbal;
    }
}
