export class Cardapply {
    customer_id : number = 0;
    email : string = "";
    cardType: string = "";
    cardStatus : number = 0;

constructor(customer_id: number, email: string, cardType: string, cardStatus:number){
this.customer_id = customer_id;
this.email = email;
this.cardType = cardType;
this.cardStatus = cardStatus;
}
}