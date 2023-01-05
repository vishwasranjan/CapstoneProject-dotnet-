import React, { Component } from "react";
import Popup from "reactjs-popup";
import './Loan.css';

export const CardApplyList=({card})=>{
    // console.log('loanInfo'+loaninfo);
    // console.log('Loan List'+loaninfo.loanId);
    var nav;
    // const ApproveLoan=()=>{
        
    //     fetch("http://localhost:5050/User/LoanStatus?loanID="+loaninfo.loanId)
    //         .then(response => response.json())
    //         .then(data => {
    //             nav=data;
    //             console.log('nav of approve  '+nav);

    //             if(nav="false")
    //             {
    //                 console.log("Indsie if----------Appprove");
    //                 fetch("http://localhost:5050/User/ApproveLoan?lid="+loaninfo.loanId,
    //                 {
    //                     method:"PUT",
    //                     headers:{
    //                         'Content-type':'application/json;charset=UTF-8'
    //                     }
    //                 });
                    

    //                 // fetch("http://localhost:5050/User/DeleteLoan?lid="+loaninfo.loanId,
    //                 // {
    //                 //     method:"DELETE",
    //                 //     headers:{
    //                 //         'Content-type':'application/json;charset=UTF-8'
    //                 //     }
    //                 // });
    //                 alert("Approved Sucessfully");
    //             }
    //             // else{
    //             //     console.log("Indise else----------Appprove");
    //             //     alert("Already Approved");
    //             // }

    //     });
    // }

    // const DeclineLoan=()=>{
        

    //     fetch("http://localhost:5050/User/LoanStatus?loanID="+loaninfo.loanId)
    //         .then(response => response.json())
    //         .then(data => {
    //             nav=data;
    //             console.log('nav of reject'+nav);
           

    //             if(nav="true")
    //             {
    //                 console.log("Indise if----------Decline");
    //                 fetch("http://localhost:5050/User/RejectLoan?lid="+loaninfo.loanId,
    //                 {
    //                     method:"PUT",
    //                     headers:{
    //                         'Content-type':'application/json;charset=UTF-8'
    //                     }
    //                 });

    //                 fetch("http://localhost:5050/User/DeleteLoan?lid="+loaninfo.loanId,
    //                 {
    //                     method:"DELETE",
    //                     headers:{
    //                         'Content-type':'application/json;charset=UTF-8'
    //                     }
    //                 });

    //                 alert("Rejected Sucessfully");

    //             }
    //             // else{
    //             //     console.log("Indise else----------Decline");
    //             //     alert("Already Rejected");
    //             // }
    //     });


    

        return(
            <div>
                <div className="loan-list">
                    <div class="row">
                        <div className="col-md-2">{card.customer_id}</div>
                        <div className="col-md-4">{card.email}</div>
                        <div className="col-md-4">{card.cardType}</div>
                        
                    </div>
                </div>
            </div>
        )
}