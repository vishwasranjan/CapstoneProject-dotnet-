export class User {
    customerId:number=0;
    firstName:string="";
    middleName:string="";
    lastName:string="";
    gender:string="";
    //dob:string="";
    email?:string;
    phone?:string;
    alternatePhone?:string;
    pin?:string;
    city?:string;
    state?:string;
    country?:string;
    // picture?:string='./assets/images/1.jpg';
  static lastname: any;
​
    constructor(customerid:number, firstname:string, middlename:string, lastname:string, gender:string, 
                dob:string, email?:string, phone?:string, alternatephone?:string, pincode?:string, city?:string, 
                state?:string, country?:string){
        this.customerId=customerid;
        this.firstName=firstname;
        this.middleName=middlename;
        this.lastName=lastname;
        this.gender=gender;
        //this.dob=dob;
        this.email=email;
        this.phone=phone;
        this.alternatePhone=alternatephone;
        this.pin=pincode;
        this.city=city;
        this.state=state;
        this.country=country;
        // this.picture=picture;
    }
}
