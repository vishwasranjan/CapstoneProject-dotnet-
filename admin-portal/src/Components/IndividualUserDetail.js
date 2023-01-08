import { Component } from "react";
import withRouter from "./withRouter";
import './IndividualUserDetail.css'
// import { withRouter } from "react-router";
import './IndividualUserDetail.css'
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
 class IndividualUserDetail extends Component{


   // const params=useParams();
//http://localhost:5050/User/GetEmpById/1
state={
    singleuser:{
        "customerId":0,
        "firstName": "",
        "middleName": "",
        "lastName": "",
        "phone": "000",
        "alternatePhone": "000",
        "email": "bsbsb",
        "city": "nbbjbj",
        "state": "nbjbjbj",
        "country": "bjbbb",
        "pin": 0,
        "gender": "xx",
        "accounts": [],
        "loans": [],
        "payees": []
    }
};

constructor(props){
    super(props);
 


}
componentDidMount(){
    fetch("http://localhost:5293/User/GetEmpById/"+this.props.params.id)
    .then(response => response.json())
    .then(data => {
        console.log('data:', data);
        this.setState({singleuser:data });
    });


}
    render(){
        console.log('singleuse:', this.state.singleuser);

        return(
            <div>

                <section className="background-user-individual">
                    <div className="user-pic">
                    <img src="https://www.bing.com/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&w=166&h=166&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"/>
                    
                    </div>
                    
               <div className="user-detail-box">
                    <div className="row">
                        <div className="col"><b>Customer Id</b></div>
                        <div className="col">{this.state.singleuser.customerId}</div>
                    </div>
                    <div className="row">
                        <div className="col"><b>First Name</b></div>
                        <div className="col">{this.state.singleuser.firstName}</div>
                    </div>

                    <div className="row">
                        <div className="col"><b>Middle Name</b></div>
                        <div className="col">{this.state.singleuser.middleName}</div>
                    </div>
                    <div className="row">
                        <div className="col"><b>Last Name</b></div>
                        <div className="col">{this.state.singleuser.lastName}</div>
                    </div>
                    <div className="row">
                        <div className="col"><b>Phone</b></div>
                        <div className="col">{this.state.singleuser.phone}</div>
                    </div>
                    <div className="row">
                        <div className="col"><b>Alternate Phone</b></div>
                        <div className="col">{this.state.singleuser.alternatePhone}</div>
                    </div>
                    <div className="row">
                        <div className="col"><b>Email ID</b></div>
                        <div className="col">{this.state.singleuser.email}</div>
                    </div>
                    <div className="row">
                        <div className="col"><b>City</b></div>
                        <div className="col">{this.state.singleuser.city}</div>
                    </div>
                    <div className="row">
                        <div className="col"><b>State</b></div>
                        <div className="col">{this.state.singleuser.state}</div>
                    </div>
                    <div className="row">
                        <div className="col"><b>Country</b></div>
                        <div className="col">{this.state.singleuser.country}</div>
                    </div>
                    <div className="row">
                        <div className="col"><b>PIN</b></div>
                        <div className="col">{this.state.singleuser.pin}</div>
                    </div>
                    <div className="row">
                        <div className="col"><b>Gender</b></div>
                        <div className="col">{this.state.singleuser.gender}</div>
                    </div>
                </div>
                <div className="button-single-user">
                    <Link to="/all-users">
                        <button className="btn btn-primary">Cancel</button>
                    </Link>
                </div>
                </section>
            </div>
            
        )
    }
 }
 export default withRouter(IndividualUserDetail);