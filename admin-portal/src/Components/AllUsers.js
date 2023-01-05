import { Component } from "react";
import { AllUserList } from "./AllUserList";
import "./AllUsers.css"

export class AllUsers extends Component{
    state={
        user:[{
            "customerId":0,
            "firstName": "",
            "middleName": "",
            "lastName": "",
            "phone": "000",
            "alternatePhone": "000",
            "email": "bsbsb",
            "city": "nbbjbj",
            "state": "nbjbjbj",
            "country": "bjbbb",
            "pin": 0,
            "gender": "xx",
            "accounts": [],
            "loans": [],
            "payees": []
        }]
    };
    
    constructor(){
        super();
        fetch("http://localhost:5050/User/GetAllUsers")
            .then(response => response.json())
            .then(data => {
                console.log('data:', data);
                this.setState({user:data });
            });
    }


    render(){
        console.log('firstname',this.state.user[0]);
        return(
            <div>
                <h5>Total Customers :{this.state.user.length}</h5>
                <div className="user-head">
                    <div class="row">
                        <div class="col-md-3">Customer ID</div>
                        <div class="col-md-8">Full Name</div>
                        {/* <div class="col">Middle Name</div>
                        <div class="col">lastName</div>
                        <div class="col">phone</div>
                        <div class="col">alternatePhone</div>
                        <div class="col">email</div>
                        <div class="col">City</div>
                        <div class="col">State</div>
                        <div class="col">Country</div>
                        <div class="col">PIN</div>
                        <div class="col">Gender</div> */}
                    </div>

                    {/* <div class="row">
                        <div class="col">{this.state.user[0].customerId}</div>
                        <div class="col">{this.state.user[0].customerId}</div>
                        <div class="col">{this.state.user[0].customerId}</div>
                        <div class="col">{this.state.user[0].customerId}</div>
                        <div class="col">{this.state.user[0].customerId}</div>
                        <div class="col">City</div>
                        <div class="col">State</div>
                        <div class="col">Country</div>
                        <div class="col">PIN</div>
                        <div class="col">Gender</div>
                    </div> */}
                        
                    {/* <p>{this.state.user[0].customerId}</p> */}
                </div>
                {this.state.user.map((c)=><AllUserList user={c}></AllUserList>)}
            </div>
        )
    }
}