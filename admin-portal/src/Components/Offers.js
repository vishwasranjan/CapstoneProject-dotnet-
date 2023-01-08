import { Alert } from "bootstrap";
import { Component } from "react";
import { Link } from "react-router-dom";
import './Offers.css';

export class Offers extends Component {
    state = {
        "title": "",
        "descript": "",
        "picture": "",
        err: {
            "title": "",
            "descript": "",
            "picture": "",
        }
    }
    postOffers(event) {
        const title = this.state.title;
        const descript = this.state.descript;
        const picture = this.state.picture;

        const offer = { title, descript, picture };
        let { err } = this.state;

        if (this.validateForm(err)) {

            fetch("http://localhost:5293/User/AddOffer", {
                method: "POST",
                body: JSON.stringify(offer),
                headers: {
                    'Content-type': 'application/json;charset=UTF-8'
                }
            }
            )
            .then(response=>{response.json();
                if(response.ok)
                {
                    alert("Offer Added Sucessfully")
                }
                else{
                    alert("Already Existed")
                }
                }
                )



        }

        let errMsgs = Object.values(err)
            .map((e) => e.length === 0 ? null : <li>{e}</li>);
        this.setState({ errMsgs });

    }

    validateForm(err) {
        let valid = true;
        Object.values(err).forEach(err => valid = valid && err.length === 0);
        return valid;
    }

    fHandler = (event) => {
        let { name, value } = event.target;
        let err = this.state.err;

        switch (name) {

            case 'title':
                if (value.length == 0) { err.title = 'Required' }
                else { err.title = ''; }
                break;
            case 'descript':
                if (value.length == 0) { err.descript = 'Required' }
                else { err.descript = ''; }
                break;
            case 'picture':
                if (value.length == 0) { err.picture = 'Required' }
                else { err.picture = ''; }
                break;
            default:
                break;
        }
        this.setState({ [name]: value, err: err });
    }
    render() {
        return (
            <div class="loan-container">
                <h3>Please Fill The Below Details To Avail Offers</h3>
                <div className="add-offer-box">
                    <div className="heading">
                        <h4>
                            Add Offers <i class="fa fa-gift" aria-hidden="true"></i>
                        </h4><hr />
                    </div>
                    <div className="row">
                        <div className="col-md-2">Title</div>
                        <div className="col-md-3"><input name="title" value={this.state.title} onChange={this.fHandler}></input></div>
                        <div className="col-md-1"><p>{this.state.err.title}</p></div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">Picture</div>
                        <div className="col-md-3"><input name="picture" value={this.state.picture} onChange={this.fHandler}></input></div>
                        <div className="col-md-1"><p>{this.state.err.picture}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">Description</div>
                        <div className="col-md-3"><input name="descript" value={this.state.descrip} onChange={this.fHandler}></input></div>
                        <div className="col-md-1"><p>{this.state.err.descrip}</p></div>
                    </div>
                </div>
                <div className="row" style={{paddingLeft: 380}}>
                    <div className="col-md-3">
                    <div className="button-save"><button className="btn btn-primary" onClick={(e) => this.postOffers(e)}>Submit</button></div>
                    </div>
                    <div className="col-md-3">
                    <Link to="/dashboard-admin">
                        <div className="button-save"><button className="btn btn-primary">Back</button></div>
                    </Link>
                    </div>
                </div>

                
            </div>
        )
    }
}