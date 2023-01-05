import React from "react";
import './Loan.css';
export const ActiveOffersList=({activeoffers})=>{
    const DeleteOffers=()=>{
        fetch("http://localhost:5050/User/DeleteOffersbyID?offerid="+activeoffers.id,
                {
                        method:"DELETE",
                        headers:{
                            'Content-type':'application/json;charset=UTF-8'
                        }
                });

                    alert("Offer Deleted Sucessfully");

    }
return(
            <div>
                <div className="offer-list">
                    <div class="row">
                        <div className="col-md-2">{activeoffers.id}</div>
                        <div className="col-md-3">{activeoffers.title}</div>
                        <div className="col-md-4">{activeoffers.descript}</div>
                        <div className="col-md-1">
                            <button className="btn btn-danger" onClick={DeleteOffers}>Delete</button>
                        </div>
                        
                    </div>
                </div>
            </div>
)
}