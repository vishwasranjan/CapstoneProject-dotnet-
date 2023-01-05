export class BankTransfer {
    accountNumber:string="";
    accountHolderName:string="";
    ifsc_payee:string="";
    amount:number=0;

    static lastname: any;

    constructor(accountNumber:string, accountHolderName:string, ifsc_payee:string, amount:number){
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.ifsc_payee=ifsc_payee;
        this.amount=amount;
    }
}
