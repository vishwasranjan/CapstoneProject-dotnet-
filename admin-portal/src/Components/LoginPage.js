import React, { Component, useState } from "react";
import { Navigate, Route, useHistory, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import withRouter from "./withRouter";
import "./LoginPage.css"
import { ReactDOM } from "react";
import { Link } from 'react-router-dom';
import { Dashboard } from "./Dashboard";


//import {useHistory} from 'react-router-dom';

const Login = (props) => {
    const [admin, setAdmin] = useState({
        id: "",
        password: ""
    })
    // history = useHistory();

    // state={
    //     id:"",
    //     password:"",
    //     navFlag:false
    // }

    const navigate = useNavigate();

    const adminform = (event) => {
        let { name, value } = event.target;
        //console.log(admin.id);
        setAdmin({ ...admin, [name]: value })
        //this.setState({[name]:value});
    }


    const loginAdmin = (event) => {

        event.preventDefault();
        // alert("Admin Login Clicked")
        // let id=document.getElementById("adminusername").value();
        // let pass=document.getElementById("adminpassword").value();
        //console.log("id="+id+" password="+pass);
        //console.log(this.state.id);
        //http://localhost:5050/User/LoginByToken?id=123&password=vishwas
        fetch("http://localhost:5050/User/LoginByToken?id=" +admin.id+"&password="+admin.password, {
            method: 'POST',
        })
            //.then(response=>response.json())
            .then((res) => res.json()).then((data)=>{
                console.log('data:',data);

                if(data.status!=401){
                    localStorage.setItem('token',data);
                    //props.fn();
                    navigate('/dashboard-admin');
                }    
               // navigate('/dashboard-admin');
            })
                
                //localStorage.setItem('token',res.data.token);
              
                // if(data===true){
                //     console.log("inside if")
                //     // alert("Welcome Admin");
                //     //send to dashboard

                //     //this.props.navigate("/dashboard-admin");

                //         //this.setState({navFlag:true})

                //         // history.push('/dashboard-admin');

                //         navigate('/dashboard-admin');


                //     console.log(data);
                // }
                // else{
                //     console.log("inside else");
                //     alert("Invalid credetails");
                //     console.log(data);
                // }
            // })
        // .then(navigate('/dashboard'))
        
    }



    // render(){
    // if(this.state.navFlag){
    //     // return <Navigate to='/dashboard-admin'/>
    // }
    return (
        <div>
            <section className="background-radial-gradient overflow-hidden">


                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-5 display-5 fw-bold ls-tight">
                                Cosmopolitian Bank <br />

                            </h1>
                            <p className="mb-4 opacity-70">
                                Solutions to all your finances, internet banking at your finger tips.
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div class="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">


                                    <div className="row">
                                        <div>
                                            <h3>Admin Login</h3>
                                        </div>

                                        <div className="form-outline mb-4">

                                            <input type="text" id="adminusername" className="form-control"
                                                placeholder="User Name" name="id" value={admin.id}
                                                onChange={(e) => adminform(e)}></input>
                                            {/* <input id="adminusername"></input> */}

                                        </div>

                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="password" id="adminpassword" className="form-control"
                                            placeholder="Password" name="password" value={admin.password}
                                            onChange={(e) => adminform(e)}></input>
                                        {/* <input id="adminpassword"></input> */}
                                    </div>


                                    {/* <div class="error">{{errorMessage}}</div> */}
                                    <button className="btn btn-primary btn-block mb-4" onClick={loginAdmin}>
                                        Log In
                                    </button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
export default Login
    // }



//export default withRouter(Login);
    // <button type="submit" className="btn btn-outline-primary" onClick={()=>this.loginAdmin(document.getElementById('adminusername').value,document.getElementById('adminpassword').value)}>Login</button>

    // <input className="form-control" id="adminpassword" type="password" name="password"
                                    // placeholder="Password"></input>

    //<input type="text" className="form-control" id="adminusername" name="name" placeholder="Admin Id"></input>