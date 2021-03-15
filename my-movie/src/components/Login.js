import React, { Component } from "react";
import serialize from "form-serialize";

class Login extends Component {

    loginSubmitButton = (e) =>{
        e.preventDefault();
        const loginSubmit = serialize(e.target, { hash: true });
        console.log(loginSubmit);
        e.target.reset();
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
        <form className="form-register" onSubmit={this.loginSubmitButton}>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="phoneNumber">Phone</label>
              <input type="text" className="form-control" name="phone"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password"/>
            </div>
          </div>
         
          <div className="form-row">
            <input type="submit" className="add-button signin" value="Sign Up"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
