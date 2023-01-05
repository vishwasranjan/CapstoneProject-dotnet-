import React, { Component } from "react";
import { ApprovedLoansList } from "./ApprovedLoansList";
import './Loan.css';
export class ApprovedLoans extends Component{
    state = {
        approvedloans:[{
            "loanId": "",
            "loanType": "",
            "ifsC_code": "",
            "amount": "",
            "customerId": "",
            "loanStatus": "",
            "customer": ""
          }]
    };

    constructor() {
        super();
       

        fetch("http://localhost:5050/User/GetAllApprovedLoans")
            .then(response => response.json())
            .then(data => {
                console.log('data:', data);
                this.setState({approvedloans:data });

            });
    }


    render(){
        return(
            <div>
                <form>
                    <div className="Loan-head-container">
                        <div class="row">
                            <div className="col-md-2">Loan ID</div>
                            <div className="col-md-2">Loan Type</div>
                            <div className="col-md-2">IFSC Code</div>
                            <div className="col-md-2">Amount</div>
                            <div className="col-md-2">Customer Id</div>
                            <div className="col-md-2">Status</div>
                        </div>
                    </div>
                </form>
                {this.state.approvedloans.map((c)=><ApprovedLoansList approved={c}></ApprovedLoansList>)}
            </div>
        )
    }
}