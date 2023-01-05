import { Component } from "react";
import { Dashboard } from "./Dashboard";

import './CardApply.css';
import { CardApplyList } from "./CardApplyList";


export class CardApply extends Component{
    state={
    cardDetails:[{
        "customer_id": 1,
        "email": "vishwas.ranjan",
        "cardType": "debit",
        "cardStatus": 0
    }]
};
    constructor(){
        super();

        fetch("http://localhost:5050/User/GetCardApplyDetails")
            .then(response => response.json())
            .then(data => {
                console.log('data'+data);
                this.setState({cardDetails:data });

            });
            console.log('Card Deatils'+this.state.cardDetails);
           
    }
    render(){
        console.log('state',this.state);
        return(
            <div className="row">
                    
    
                    
                    <div className="card-head-container">
                        <div class="row">
                            
                            <div className="col-md-2">Customer ID</div>
                            <div className="col-md-4">Email</div>
                            <div className="col-md-4">Card Type</div>
                            
                            
                        </div>
                    </div>
                    
                    {this.state.cardDetails.map((c)=><CardApplyList card={c}></CardApplyList>)}
                </div>
           
        )
    }
}