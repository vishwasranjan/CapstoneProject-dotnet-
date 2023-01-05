import { Alert } from "bootstrap";
import { Component } from "react";
import './Offers.css';

export class Offers extends Component{
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
    postOffers(event){
        const id=this.state.id;
        const title=this.state.title;
        const descript=this.state.descript;
        const picture=this.state.picture;

        const offer={id,title,descript,picture};
        let{err}=this.state;

        if(this.validateForm(err)){
           
            fetch("http://localhost:5050/User/AddOffers",{
            method:"POST",
            body:JSON.stringify(offer),
            headers:{
                'Content-type':'application/json;charset=UTF-8'
            }
        }).then(response=>{response.json();
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

        let errMsgs=Object.values(err)
                            .map((e)=>e.length===0?null:<li>{e}</li>);
        this.setState({errMsgs});

    }

    validateForm(err){
        let valid=true;
        Object.values(err).forEach(err=>valid=valid && err.length===0);
        return valid;
    }

    fHandler=(event)=>{
        let{name,value}=event.target;
        let err=this.state.err;

        switch(name)
        {
            case 'id':
                if(value.length===0){err.id='Offer ID is required';}
                else{err.id='';}
                break;
            case 'title':
                if(value.length==0){err.title='Required'}
                else{err.title='';}
                break;
            case 'descript':
                if(value.length==0){err.descript='Required'}
                else{err.descript='';}
                break;
            case 'picture':
                if(value.length==0){err.picture='Required'}
                else{err.picture='';}
                break;
                default:
                    break;
            }
            this.setState({[name]:value,err:err});
    }
    render(){
        return(
            <div>
                <h4>Please Fill the below deatils to avail offers</h4>
                <div className="add-offer-box">
                    <div className="heading">
                    <h6>Add Offer</h6><hr/>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-1"><label>Offer Id</label></div>
                        <div className="col-md-3"><input name="id" value={this.state.id} onChange={(e)=>this.fHandler(e)}></input></div>
                        <div className="col-md-1"><p>{this.state.err.id}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">Title</div>
                        <div className="col-md-3"><input name="title" value={this.state.title} onChange={this.fHandler}></input></div>
                        <div className="col-md-1"><p>{this.state.err.title}</p></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-1">Picture</div>
                        <div className="col-md-3"><input name="picture"  value={this.state.picture} onChange={this.fHandler}></input></div>
                        <div className="col-md-1"><p>{this.state.err.picture}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">Description</div>
                        <div className="col-md-3"><input name="descript"  value={this.state.descrip} onChange={this.fHandler}></input></div>
                        <div className="col-md-1"><p>{this.state.err.descrip}</p></div>
                    </div>
                   
                    <div className="button-save"><button className="btn btn-primary" onClick={(e)=>this.postOffers(e)}>Submit</button></div>
                </div>
            </div>
        )
    }
}