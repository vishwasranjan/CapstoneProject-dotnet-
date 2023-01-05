import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes,Link, Navigate, useNavigate } from "react-router-dom";
import { AddCustomer } from "./AddCustomer";
import { AllTransaction } from "./AllTransaction";
import IndividualUserDetail  from "./IndividualUserDetail";
import {AllUsers} from "./AllUsers";
import { Loans } from "./Loans";
import { Offers } from "./Offers";
import {ApprovedLoans} from "./ApprovedLoans";
import {ActiveOffers} from "./ActiveOffers";
import  Login  from "./LoginPage";
import { Dashboard } from "./Dashboard";
import './RouteComponent.css';
import { CardApply } from "./CardApply";


export class RouteComponent extends Component{

//state={x:""};

    getLoginCaption(){
        if(localStorage.getItem('token')!=null){
           
            return "Logout";
        }else{
            return "Login";
        }
    }
    logout(){
        localStorage.removeItem('token');
        //navigate to login
    }
    // refreshPage(){
    //     this.render();
    // }

    render(){
        return(
            <div>
                 <Router>
               
                <div className="header">
                    <div className="container-fluid">
                    <h2 >Cosmopolitian Bank</h2>
                  {/* <Link to="/dashboard-admin">
                    <button onClick={()=>{this.logout()}} className="btn logout"
                    
                    >{this.getLoginCaption()}</button>
                    </Link> */}
                    </div>
                    
                    
                </div>
                    <Routes>
                        
                        <Route path="/" element={<Login />}/>
                        <Route path="/add-customer" exact element={<AddCustomer/>}/>
                        <Route path="/all-users" exact element={<AllUsers/>}/>
                        <Route path="/all-transactions" exact element={<AllTransaction />}/>
                        <Route path="/offers" exact element={<Offers />}/>
                        <Route path="/active-offers" exact element={<ActiveOffers/>}/>
                        <Route path="/loans" exact element={<Loans />}/>
                        <Route path="/singleuser/:id" exact element={<IndividualUserDetail/>}/>
                        <Route path="/approved-loans" exact element={<ApprovedLoans/>}/>
                        <Route path="/card-apply" exact element={<CardApply/>}></Route>
                        
                        <Route path="/dashboard-admin" exact element={<Dashboard/>}/>
                        
                    </Routes>
                </Router>
            </div>
        )
    }
}