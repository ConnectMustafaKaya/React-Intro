import React, { Component } from "react";
import { Form } from "reactstrap";

export default class FormDemo1 extends Component {
  state = { username: "" };
  onChangeHandler =(event)=>{
      this.setState({username:event.target.value})
  }
  onSubmitHandler =(event)=>{
      event.preventDefault();
      alert(this.state.username);
}

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            <input onChange={this.onChangeHandler} type="text"/> 
            
            <h3>User Name is {this.state.username}</h3>
            <input value="Save" type="submit"/> 

        </Form>
      </div>
    );
  }
}
