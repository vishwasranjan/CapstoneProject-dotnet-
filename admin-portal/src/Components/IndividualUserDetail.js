import { Component } from "react";
import withRouter from "./withRouter";
import './IndividualUserDetail.css'
// import { withRouter } from "react-router";
import './IndividualUserDetail.css'
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
    fetch("http://localhost:5050/User/GetEmpById/"+this.props.params.id)
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
                
               <div className="user-detail-box">
                    <div className="row">
                        <div className="col">Customer Id</div>
                        <div className="col">{this.state.singleuser.customerId}</div>
                    </div>
                    <div className="row">
                        <div className="col">firstName</div>
                        <div className="col">{this.state.singleuser.firstName}</div>
                    </div>

                    <div className="row">
                        <div className="col">middleName</div>
                        <div className="col">{this.state.singleuser.middleName}</div>
                    </div>
                    <div className="row">
                        <div className="col">lastName</div>
                        <div className="col">{this.state.singleuser.lastName}</div>
                    </div>
                    <div className="row">
                        <div className="col">Phone</div>
                        <div className="col">{this.state.singleuser.phone}</div>
                    </div>
                    <div className="row">
                        <div className="col">Alternate Phone</div>
                        <div className="col">{this.state.singleuser.alternatePhone}</div>
                    </div>
                    <div className="row">
                        <div className="col">Email ID</div>
                        <div className="col">{this.state.singleuser.email}</div>
                    </div>
                    <div className="row">
                        <div className="col">City</div>
                        <div className="col">{this.state.singleuser.city}</div>
                    </div>
                    <div className="row">
                        <div className="col">State</div>
                        <div className="col">{this.state.singleuser.state}</div>
                    </div>
                    <div className="row">
                        <div className="col">Country</div>
                        <div className="col">{this.state.singleuser.country}</div>
                    </div>
                    <div className="row">
                        <div className="col">PIN</div>
                        <div className="col">{this.state.singleuser.pin}</div>
                    </div>
                    <div className="row">
                        <div className="col">Gender</div>
                        <div className="col">{this.state.singleuser.gender}</div>
                    </div>
                </div>
                
            </div>
            
        )
    }
 }
 export default withRouter(IndividualUserDetail);