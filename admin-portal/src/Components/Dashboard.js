import { Component } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AddCustomer } from "./AddCustomer";
import { AllTransaction } from "./AllTransaction";
import IndividualUserDetail from "./IndividualUserDetail";
import { AllUsers } from "./AllUsers";
import { Loans } from "./Loans";
import { Offers } from "./Offers";
import { ApprovedLoans } from "./ApprovedLoans";
import { ActiveOffers } from "./ActiveOffers";
import "./Dashboard.css"
import Login from "./LoginPage";
export class Dashboard extends Component {
    render() {
        return (
            // <Router>
            <div className="dashboard-container">
                <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link className="nav-link" to="/add-customer">Add Customer</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="nav-link" to="/all-users">All Customers</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="nav-link" to="/all-transactions">
                                All transaction</Link>
                        </li>

                        <li className="list-group-item">
                            <Link className="nav-link" to="/offers">Add Offers</Link>

                        </li>
                        <li className="list-group-item">
                            <Link className="nav-link" to="/active-offers">Active Offers</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="nav-link" to="/loans">Loans</Link>
                        </li>

                        <li className="list-group-item">
                            <Link className="nav-link" to="/approved-loans">Approved Loans</Link>
                        </li>

                        <li className="list-group-item">
                            <Link className="nav-link" to="/card-apply">Card Applications</Link>
                        </li>

                        
                    </ul>
                </div>
                <div className="col-md-8">
                    
                
                

                <div class="c">
    <div id="carouselExampleInterval" class="carousel slide c" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="1000">
          <img
            src="https://www.stancoe.org/sites/default/files/styles/banner/public/banners/Administration.jpg?itok=jXKB2uR2"
            class="d-block w-100 " alt="first-slide"/>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://img.freepik.com/free-photo/negotiations-about-contract-terms-concept-hand-pointing-document-closeup_1163-4705.jpg?size=626&ext=jpg&ga=GA1.2.1245521703.1672667967&semt=sph "
            class="d-block w-100" alt="second-slide"/>
        </div>
        <div class="carousel-item">
          <img
            src="https://img.freepik.com/free-vector/illustration-online-payment_53876-20602.jpg?size=626&ext=jpg&ga=GA1.2.1245521703.1672667967&semt=sph"
            class="d-block w-100" alt="third-slide"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

      

    </div>
    
  </div>


  


  </div>

  </div>
  {/* <marquee style={{ color: 'red', fontSize: '3em' }}>Test</marquee> */}
            </div>
            //   {/* </Router> */}
        )
    }
}














{/* <Routes>
                    <Route path="/" element={<Login/>}/>

                    
                    <Route path="/add-customer" exact element={<AddCustomer/>}/>
                    <Route path="/all-users" exact element={<AllUsers/>}/>
                    <Route path="/all-transactions" exact element={<AllTransaction />}/>
                    <Route path="/offers" exact element={<Offers />}/>
                    <Route path="/active-offers" exact element={<ActiveOffers/>}/>
                    <Route path="/loans" exact element={<Loans />}/>
                    <Route path="/singleuser/:id" exact element={<IndividualUserDetail/>}/>
                    <Route path="/approved-loans" exact element={<ApprovedLoans/>}/>
                    <Route path="/approved-loans" exact element={<ApprovedLoans/>}/>


                    <Route path="/dashboard-admin" exact element={<Dashboard/>}/>
                    
                    {/* <Route path="/dashboard" exact element={<Dashboard/>}/> 
                    
                </Routes>*/}