import React, { Component } from "react";
import serialize from "form-serialize";

class Register extends Component {

  state = {
    firstName : '',
    lastName : '',
    phone : '',
    address : '',
    password : '',
    passwordMessage : ''
  }

    loginSubmitButton = (e) =>{
        e.preventDefault();
        const loginSubmit = serialize(e.target, { hash: true });
        console.log(loginSubmit);
        e.target.reset();
    }

    handleSubmitValidation = () => {
      if(this.state.password.length < 6){
        this.setState({
            passwordMessage : "şifre 6 herfden az ola bilmez"
        })
        return false;
      }
      return true;
    }

    inti = () => {
      this.setState({
        firstName : ' ',
        lastName : ' ',
        phone : ' ',
        address : ' ',
        password : ' ',
      })
    }


    handleSubmit= (e) =>  {
      e.preventDefault();

      if(this.handleSubmitValidation()) {
        console.log(this.state)
        this.inti();

      }
    }

    onChangeCheckBox(event) {
        if(event.target.checked) {
            this.submitButtonRef.disabled = "";
            console.log("enable")
        }
        else {
            this.submitButtonRef.disabled = "disabled";
            console.log("disable")
        }
    }  
  render() {
    return (
      <div className="login-page">
        <form className="form-register" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="firstName">First Name</label>
              <input onChange={e => this.setState({firstName: e.target.value})} type="text" className="form-control" name="FirstName" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="LastName">Last Name</label>
              <input type="text" onChange={e => this.setState({lastName: e.target.value})} className="form-control" name="lastName" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="phoneNumber">Phone</label>
              <input type="text" onChange={e => this.setState({phone: e.target.value})} className="form-control" name="phone"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="address">Address</label>
              <input type="text" onChange={e => this.setState({address: e.target.value})} className="form-control" name="address"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="password">Password</label>
              <input type="password" onChange={e => this.setState({password: e.target.value})} className="form-control" name="password"/>
              <small>{this.state.paswwrodMessage == '' ?  "\u00A0" : this.state.passwordMessage }</small>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
                <label htmlFor="accept" className="checkbox-parent agreement">  
                    <p>accept</p>
                    <input type="checkbox" id="accept" name="accept"  ref={element => { this.chekboxRef = element }}
                        onChange={event => this.onChangeCheckBox(event)}/>
                    <span className="checkmark"></span>
                </label>
            </div>
          </div>
          <div className="form-row">
            <input type="submit" className="add-button "  ref={element => {this.submitButtonRef = element;}} disabled="disabled" value="sign in"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
