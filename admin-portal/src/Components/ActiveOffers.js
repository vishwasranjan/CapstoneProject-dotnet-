import { Component } from "react";
import './ActiveOffers.css';
import { ActiveOffersList } from "./ActiveOffersList";
export class ActiveOffers extends Component{
    state={
           offers:[{
            "id": "",
            "title": "",
            "descript": "",
            "picture": "",
           }] 
        }
    constructor(){
        super();

        fetch("http://localhost:5050/User/ActiveOffers")
            .then(response => response.json())
            .then(data => {
                console.log('data'+data);
                this.setState({offers:data });

            });
           // console.log('Loan Deatils'+this.state.loanDetails);
           
    }
    render(){
        //console.log('state',this.state);
        return(
            <div>
                <div className="active-offers-head-container">
                    <div class="row">
                        <div className="col-md-2">ID</div>
                        <div className="col-md-3">Title</div>
                        <div className="col-md-4">Description</div>
                        <div className="col-md-1">Options</div>
                        
                    </div>
                </div>
                {this.state.offers.map((c)=><ActiveOffersList activeoffers={c}></ActiveOffersList>)}
            </div>
        )
    }
}