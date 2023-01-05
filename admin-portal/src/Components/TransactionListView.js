import { Component } from "react";
import "./AllTransaction.css"

export const TransactionList=({transaction})=> {
    
        return(
            <div>

                <div className="transaction-container">
                    <div class="row">
                        <div class="col">{transaction.transaction_ID}</div>
                        <div class="col">{transaction.transactionType}</div>
                        <div class="col">{transaction.transaction_amount}</div>
                        <div class="col">{transaction.transaction_time}</div>
                    </div>
                </div>



                        {/* <table className="table-list">
                            <tr>
                                <td>{transaction.transaction_ID}</td>
                                <td>{transaction.transactionType}</td>
                                <td>{transaction.transaction_amount}</td>
                                <td>{transaction.transaction_time}</td>
                            </tr>
                        </table> */}

            </div>
        )
}