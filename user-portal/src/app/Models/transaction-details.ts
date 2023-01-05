export class TransactionDetails {
    transactionId? : number = 0;
    transactionType: string = ""
    transaction_amount : number =0
    transaction_time : Date = new Date()
    customer_id : number = 0;
    constructor(transactionId: number, transactionType: string, transaction_amount: number, transaction_time : Date, customer_id: number)
    {
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.transaction_amount = transaction_amount;
        this.transaction_time = transaction_time;
        this.customer_id = customer_id;
    }
    
}

