import { Component } from "react";
import { Link } from "react-router-dom";
import './AddCustomer.css'

export class AddCustomer extends Component{
    state={
        customerId:"",
        firstName:"",
        middleName:"",
        lastName:"",
        phone:"",
        alternatePhone:"",
        email:"",
        city:"",
        state:"",
        country:"",
        pin:"",
        gender:"",
        formErrors:{
            customerId:"",
            firstName:"",
            middleName:"",
            lastName:"",
            phone:"",
            alternatePhone:"",
            email:"",
            city:"",
            state:"",
            pin:"",
            gender:"",
        },
        errMsgs:""
    }
    saveUserDetails=(event)=>{

        //event.preventDefault();
        console.log("Save user clicked");
        const customerId=this.state.customerId;
        const firstName=this.state.firstName;
        const middleName=this.state.middleName;
        const lastName=this.state.lastName;
        const phone=this.state.phone;
        const alternatePhone=this.state.alternatePhone;
        const email=this.state.email;
        const city=this.state.city;
        const state=this.state.state;
        const country=this.state.country;
        const pin=this.state.pin;
        const gender=this.state.gender;

        const user={customerId,firstName,middleName,lastName,phone,alternatePhone,email,city,state,country,pin,gender};
        let{formErrors}=this.state;
        console.log('Insserting CID '+user.customerId);

        if(this.validateForm(formErrors))
        {
            //POST request using FETCH API
            fetch("http://localhost:5050/User/AddCustomer",{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-type':'application/json;charset=UTF-8'
            }
        }).then(response=>{response.json();
            if(response.ok)
            {
                alert("User Added Sucessfully")
            }
            else{
                alert("Already Existed")
            }
        }
        )
        }

        let errMsgs=Object.values(formErrors)
                            .map((err)=>err.length===0?null:<li>{err}</li>);
        this.setState({errMsgs});


        
    }

    validateForm(formErrors){
        let valid=true;
        Object.values(formErrors).forEach(err=>valid=valid && err.length===0);
        return valid;
    }


    fHandler=(event)=>{
        let{name,value}=event.target;
        let formErrs=this.state.formErrors;
        switch(name)
        {
            case 'customerId':
                if(value.length===0){formErrs.customerId='Customer ID is required';}
                else if(value.length<5 || value.length>20){formErrs.customerId='Customer ID must be in between 5 to 20 digits';}
                else{formErrs.customerId='';}
                break;
            case 'firstName':
                if(value.length==0){formErrs.firstName='Required'}
                else{formErrs.firstName=''}
                break;
            case 'middleName':
                // if(value.length==0){formErrs.middleName='Required'}
                // else{formErrs.middleName=''}
                break;
            case 'lastName':
                // if(value.length==0){formErrs.lastName='Required'}
                // else{formErrs.lastName=''}
                break;
            case 'phone':
                if(value.length==0){formErrs.phone='Required'}
                else if(value.length!=10){formErrs.phone='Phone number must be of 10 digits'}
                else{formErrs.phone=''}
                break;
            case 'alternatePhone':
                if(value.length==0){formErrs.alternatePhone='Required'}
                else if(value.length!=10){formErrs.alternatePhone='Phone number must be of 10 digits'}
                else{formErrs.alternatePhone=''}
                break;
            case 'email':
                if(value.email==0){formErrs.email='Required'}
                else if(!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){formErrs.email='Enter a Valid Email id'}
                else{formErrs.email=''}
                    break;
            case 'city':
                if(value.length==0){formErrs.city='Required'}
                else{formErrs.city=''}
                    break;
            case 'state':
                if(value.length==0){formErrs.state='Required'}
                else{formErrs.state=''}
                break;
            case 'country':
                if(value.length==0){formErrs.country='Required'}
                else{formErrs.country=''}
                break;
            case 'pin':
                if(value.length==0){formErrs.pin='Required'}
                else if(value.length!=6){formErrs.pin='Enter a valid PIN code'}
                else{formErrs.pin=''}
                break;
            case 'gender':
                if(value.length==0){formErrs.gender='Required'}
                else if(value=="Male" || value=="Female" || value=="male" || value=="female"|| value=="others" || value=="Others")
                {formErrs.gender=''}
                else{formErrs.gender='Enter male female or others'}
                break;
                default:
                    break;
            }
            this.setState({[name]:value,formErrors:formErrs});
            
           
    }
    render(){
        return(
            <div>
                <h6>Please Fill the below deatils to add the customer</h6>
                
                <div className="add-customer-box">
                    <div className="heading">
                        <h6>Add Customer</h6><hr/>
                    </div>
                    <div className="row">
                        <div className="col"><label>Customer Id</label></div>
                        <div className="col"><input name="customerId" value={this.state.customerId} onChange={(e)=>this.fHandler(e)}></input></div>
                        <div className="col"><p>{this.state.formErrors.customerId}</p></div>
                    </div>
                    <div className="row">
                        <div className="col">First Name</div>
                        <div  className="col"><input name="firstName" value={this.state.firstName} onChange={this.fHandler}></input></div>
                        <div className="col"><p>{this.state.formErrors.firstName}</p></div>
                    </div>
                    <div className="row">
                        <div className="col">Middle Name</div>
                        <div className="col"><input name="middleName"  value={this.state.middleName} onChange={this.fHandler}></input></div>
                        <div className="col"><p>{this.state.formErrors.lastName}</p></div>
                    </div>
                    <div className="row">
                        <div className="col">Last Name</div>
                        <div className="col"><input name="lastName"  value={this.state.lastName} onChange={this.fHandler}></input></div>
                        <div className="col"><p>{this.state.formErrors.lastName}</p></div>
                    </div>
                    <div className="row">
                        <div className="col">Phone</div>
                        <div className="col"><input input="number" name="phone"  value={this.state.phone} onChange={this.fHandler}></input></div>
                        <div className="col"><p>{this.state.formErrors.phone}</p></div>
                    </div>
                    <div className="row">
                        <div className="col">Alternate Phone</div>
                        <div className="col"><input input="number" name="alternatePhone"  value={this.state.alternatePhone} onChange={this.fHandler}></input></div>
                        <div className="col"><p>{this.state.formErrors.alternatePhone}</p></div>
                    </div>
                    <div className="row">
                        <div className="col">Email</div>
                        <div className="col"><input name="email"  value={this.state.email} onChange={this.fHandler}></input></div>
                        <div className="col"><p>{this.state.formErrors.email}</p></div>
                    </div>
                    <div className="row">
                        <div className="col">City</div>
                        <div  className="col"><input name="city" value={this.state.city} onChange={this.fHandler}></input></div>
                        <div className="col"><p>{this.state.formErrors.city}</p></div>
                    </div>
                    <div className="row">
                        <div className="col">State</div>
                        <div className="col"><input name="state"  value={this.state.state} onChange={this.fHandler}></input></div>
                        <div className="col"><p>{this.state.formErrors.state}</p></div>
                    </div>
                    <div className="row">
                        <div className="col">Country</div>
                        <div className="col"><input name="country"  value={this.state.country} onChange={this.fHandler}></input></div>
                        <div className="col"><p>{this.state.formErrors.country}</p></div>
                    </div>
                    <div className="row">
                        <div className="col">Pin</div>
                        <div className="col"><input input="number" name="pin"  value={this.state.pin} onChange={this.fHandler}></input></div>
                        <div className="col"><p>{this.state.formErrors.pin}</p></div>
                    </div>
                    <div className="row">
                        <div className="col">Gender</div>
                        <div className="col"><input name="gender"  value={this.state.gender} onChange={this.fHandler}></input></div>
                        <div className="col"><p>{this.state.formErrors.gender}</p></div>
                    </div>
                    <div className="row">
                        <Link to="/dashboard-admin"><button>Cancel</button></Link>
                    </div>
                    <div className="button-save"><button className="btn btn-primary" onClick={(e)=>this.saveUserDetails(e)}>Submit</button></div>
                </div>





            </div>
        )
    }
}