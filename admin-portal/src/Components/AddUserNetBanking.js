import React, { Component } from "react";
import "./AddUserNetBanking.css"
export class AddUserNetBanking extends Component{
    state={
        "id": "",
        "title": "",
        "descript": "",
        "picture": "",
        err:{
            "id": "",
            "title": "",
            "descript": "",
            "picture": "",
        }
}
    
    render(){
        return(
            <div id="Addform">
                
                    <div className="card col-md-10" >
                        <div className="row">
                            <div className="col-md-3">
                                <label>Customer ID</label>
                            </div>

                            
                            <div className="col-md-4">
                                <input name="CustomerId"  placeholder="Customer Id" ></input>
                            </div>
                            
                            {/* <a id="validButton"   className="" >Validate </a> */}

                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>User Name</label>
                            </div>
                            <div className="col-md-4">
                                <input name="UserName"  placeholder="User Name"></input>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label>User Password</label>
                            </div>
                            <div className="col-md-4">
                                <input name="pswd"  placeholder="Password"></input>
                            </div>
                            
                        </div>
                        <div className="btn">
                                <button  className="btn btn-primary">Submit</button>
                        </div>

                    </div>
            </div>
        )
    }
}