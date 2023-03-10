import { Component } from "react";
import { Link } from "react-router-dom";
import "./AllTransaction.css"
import { TransactionList } from "./TransactionListView";

export class AllTransaction extends Component {
    state = {
        transaction:[{
            "customer_id":"0",
            "transaction_id":"0",
            "transactionType": "",
            "transaction_amount": 0,
            "transaction_time": "",
            "transactionCredits": [],
            "transactionDebits": []
          }]
    };

    constructor() {
        super();
       

        fetch("http://localhost:5293/User/GetAllTransactions")
            .then(response => response.json())
            .then(data => {
                console.log('data:', data);
                this.setState({transaction:data });
                //this.forceUpdate();
                //console.log('tid:',this.state.transaction);});
                // .then(data=>console.log(data));
                //console.log(this.state.transaction);
                //    console.log(this.state.transaction.Transaction_ID);

            });
    }

    render() {
        console.log('state',this.state);

        //http://localhost:5050/User/TransactionDetails
        return (
            <div className="containert">
                <div className="button">
                    <Link to="/dashboard-admin">
                        <button className="btn"><i class="fa fa-close"></i></button>
                    </Link>
                </div>
                <div className="transaction-container-thead">
                    <div class="row">
                        <div class="col">
                        Customer ID
                        </div>
                        <div class="col">
                        Transaction ID
                        </div>
                        <div class="col">
                        Transaction Type
                        </div>
                        <div class="col">
                        Amount
                        </div>
                        <div class="col">
                        Time
                        </div>
                    </div>
                </div>
                {this.state.transaction.map((c)=><TransactionList transaction={c}></TransactionList>)}
                
                {/* <table className="table-list">
                            <tr>
                                <th>Transaction ID</th>
                                <th>Transaction Type</th>
                                <th>Amount</th>
                                <th>Time</th>
                            </tr>
                            {this.state.transaction.map((c)=><TransactionList transaction={c}></TransactionList>)}
                </table> */}

                
            </div>
        )
    }
}