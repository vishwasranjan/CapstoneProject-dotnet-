export class Loans {
    loanId : number = 0;
    customerId:number=0;
    loanType:string="";
    amount: number = 0;
    noOfYears : number = 0;
    
​
    constructor(loanId:number,customerid:number, loantype:string, loanamount:number, noOfYears:number){
        this.loanId  = loanId;
        this.customerId=customerid;
        this.loanType=loantype;
        this.amount=loanamount;
        this.noOfYears= noOfYears;
}
}