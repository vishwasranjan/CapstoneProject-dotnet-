import { Component } from "react";
import { Dashboard } from "./Dashboard";

import './Loan.css';
import { LoanList } from "./LoanList";


export class Loans extends Component{
    state={
    loanDetails:[{
        "loanId": 0,
        "loanType": "",
        "ifsC_code": 0,
        "amount": 0,
        "customerId": 0,
        "loanStatus": null,
        "iTdocument1": "0",
        "iTdocument2": "0",
        "bSdocument": "0",
        "customer": null
    }]
};
    constructor(){
        super();

        fetch("http://localhost:5293/User/GetLoanDeatils")
            .then(response => response.json())
            .then(data => {
                console.log('data'+data);
                this.setState({loanDetails:data });

            });
            console.log('Loan Deatils'+this.state.loanDetails);
           
    }
    render(){
        console.log('state',this.state);
        return(
            <div className="row">
                    
    
                    
                    <div className="Loan-head-container">
                        <div class="row">
                            
                            <div className="col-md-1">Loan ID</div>
                            <div className="col-md-2">Loan Type</div>
                            <div className="col-md-1">Years</div>
                            <div className="col-md-1">Amount</div>
                            <div className="col-md-2">Customer Id</div>
                            <div className="col-md-1">Doc1</div>
                            <div className="col-md-1">Doc2</div>
                            <div className="col-md-1">Doc3</div>
                            <div className="col-md-2">Options</div>
                            
                        </div>
                    </div>
                    
                    {this.state.loanDetails.map((c)=><LoanList loaninfo={c}></LoanList>)}
                </div>
           
        )
    }
}