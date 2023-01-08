export class Loans {
    loanId : number = 0;
    customerId:number=0;
    loanType:string="";
    amount: number = 0;
    noOfYears : number = 0;
    loanStatus: string = "";
    iTdocument1: string = "";
    iTdocument2: string = "";
    bSdocument: string = "";
​
    constructor(loanId:number,customerid:number, loantype:string, loanamount:number, noOfYears:number, loanStatus: string, iTdocument1: string, iTdocument2: string, bSdocument: string){
        this.loanId  = loanId;
        this.customerId=customerid;
        this.loanType=loantype;
        this.amount=loanamount;
        this.noOfYears= noOfYears;
        this.loanStatus = loanStatus;
        this.iTdocument1 = iTdocument1;
        this.iTdocument2 = iTdocument2;
        this.bSdocument = bSdocument;
}
}