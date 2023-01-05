export class Payee {
    payeeId : number = 0;
    senderId : number = 0;
    payee_email? : string = "";
    sender_email : string = "";
    payee_acc_no : string = "";
    sender_acc_no : string = "";


    constructor(payeeId: number, senderId: number, payeeEmail: string, senderEmail: string, payeeAccNo:string,senderAccNo:string){
     this.payeeId = payeeId;
     this.senderId = senderId;
     this.payee_email = payeeEmail;
     this.sender_email= senderEmail;
     this.payee_acc_no = payeeAccNo;
     this.sender_acc_no = senderAccNo;
    }
}
