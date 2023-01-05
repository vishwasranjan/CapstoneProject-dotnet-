import { HashRouter as Router, Route, Routes,Link } from "react-router-dom";
import "./AllUsers.css";
import Popup from "reactjs-popup";
// import IndividualUserDetail  from "./IndividualUserDetail";

import { useNavigate } from "react-router-dom";

export const AllUserList=({user})=>{

 const navigate=useNavigate();


    function userDetailsOnClick(){
        //alert("Clicked");
        navigate(`/singleuser/${user.customerId}`);
    }
    return(
        
        <div>
            <div className="nav-link">
                {/* <Link className="nav-link" to="/singleuser"> */}
                    <div className="row" onClick={userDetailsOnClick}>
                        <div class="col-md-3">{user.customerId}</div>
                        <div class="col-md-4">{user.firstName} {user.middleName} {user.lastName}</div>
                        {/* <IndividualUserDetail></IndividualUserDetail> */}
                        
                        {/* <div class="col">{user.middleName}</div>
                        <div class="col">{user.lastName}</div>
                        <div class="col">{user.phone}</div>
                        <div class="col">{user.alternatePhone}</div>
                        <div class="col">{user.email}</div>
                        <div class="col">{user.city}</div>
                        <div class="col">{user.state}</div>
                        <div class="col">{user.country}</div>
                        <div class="col">{user.pin}</div>
                        <div class="col">{user.gender}</div> */}
                        
                    </div>
                    {/* </Link> */}
                </div>
        </div>
        
    )
}