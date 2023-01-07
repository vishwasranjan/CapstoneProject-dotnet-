import React, { Component } from "react";
import "./AddUserNetBanking.css"
export class AddUserNetBanking extends Component{
    state={
        "customerId": 0,
        "userName": "abc",
        "pswd": "abc",
        
    }


    fHandler = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value});
    }

    UserCredentials=()=>{
        const customerId = this.state.customerId;
        const userName = this.state.userName;
        const pswd = this.state.pswd;

        const login = {customerId,userName,pswd};
        fetch("http://localhost:5293/User/CheckExistingUser?custid="+this.state.customerId, {
                method: "GET",
            }
            )
            .then((res) => res.json()).then((data)=>{
                console.log('data:',data);

                if(data==200){
                    //push data
                    //http://localhost:5293/User/registerUser
                    fetch("http://localhost:5293/User/AddUserCredentials",{
                method: "POST",
                body: JSON.stringify(login),
                headers: {
                    'Content-type': 'application/json;charset=UTF-8'
                }
            }
            ).then(response=>{response.json();
                if(response.ok)
                {
                    alert("User Added Sucessfully")
                }
                else{
                    alert("Already Added")
                }
                }
                )





                    
                }
                if(data==400)
                {
                    alert("User doesnot exist");
                }    
               
            })
    }



    
    render(){
        return(
            <div>
                <section className="background">
                <div id="Addform">
                
                <div className="card col-md-10" >
                    <div className="row">
                        <div className="col-md-3">
                            <label>Customer ID</label>
                        </div>
                        

                        
                        <div className="col-md-4">
                            <input name="customerId" onChange={this.fHandler} value={this.state.customerId}  placeholder="Customer Id" ></input>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label>User Name</label>
                        </div>
                        <div className="col-md-4">
                            <input name="userName" onChange={this.fHandler} value={this.state.userName}  placeholder="User Name"></input>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label>User Password</label>
                        </div>
                        <div className="col-md-4">
                            <input name="pswd" onChange={this.fHandler} value={this.state.pswd} placeholder="Password"></input>
                        </div>
                        
                    </div>
                    <div className="btn">
                            <button onClick={this.UserCredentials}  className="btn btn-primary">Submit</button>
                    </div>

                </div>
        </div>
                </section>
            </div>
        )
    }
}