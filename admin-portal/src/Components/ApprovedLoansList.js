import React from "react";
export const ApprovedLoansList=({approved})=>{
return(
            <div>
                <div className="loan-list">
                    <div class="row">
                        <div className="col-md-2">{approved.loanId}</div>
                        <div className="col-md-2">{approved.loanType}</div>
                        <div className="col-md-2">{approved.ifsC_code}</div>
                        <div className="col-md-2">{approved.amount}</div>
                        <div className="col-md-2">{approved.customerId}</div>
                        <div className="col-md-2"><i>Approved</i></div>
                    </div>
                </div>
            </div>
)
}