import React, { Component } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
class Contact extends Component {

    state = {
        name: null,
        email: null,
        message: null,
        error:null,
        buttonstate:false,
        submissionResponse:null
      };

      constructor(props) {
        super(props);
        this.state = {name: null,
            email: null,
            message:null,
            buttonstate:false,
        error:null,submissionResponse:null}
        ;
      }

      setData() {
        console.log("wes")
   axios.post("http://"+window.location.hostname+":3003/api/form/insert", {name:this.state.name,message:this.state.message,email:this.state.email},{ headers: {'content-type': 'application/json'}})
       .then(response => this.setState({ submissionResponse: response.data.message }));
   }
   ValidEmail() {
    console.log(this.state.email)
    return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email)
    }

    setValueForEmail= (e)=> {
        this.setState({error: null});
        this.setState({submissionResponse: null});
        this.setState({email: e.target.value});
        
    }
    setValueForMessage= (e)=> {
        this.setState({error: null});
        this.setState({submissionResponse: null});
        this.setState({message: e.target.value});
        
    }
    setValueForName= (e)=> {
        this.setState({error: null});
        this.setState({submissionResponse: null});
        this.setState({name: e.target.value});
        
    }
    handleClick = (e) => {
        //do something
        e.preventDefault();
        this.setState({submissionResponse: null});
        this.setState({error: null});
        this.state.buttonstate=true
        console.log(this.state)
        console.log(this.ValidEmail() )
        console.log((this.state.message && this.state.message.trim().length))
        console.log(this.state.name && this.state.name.trim().length)
        if(this.ValidEmail() && (this.state.message && this.state.message.trim().length) && (this.state.name && this.state.name.trim().length))
        {
          this.setData()
        }
        else
        {
          this.setState({error: "Please enter valid data"});
        }
        this.state.buttonstate=false
      }


render() {
    let error
    if (this.state.error) {

        error = <label className='laberror' >Please Enter valid data</label>
  
      } 
      let result
      if (this.state.submissionResponse) {
  
          result = <label className="lab" >{this.state.submissionResponse}</label>
    
        } 
return (
    
<div className="condiv wfont">
<h1 className="subtopic">Contact Me</h1>

<form id="contact-form" >
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" onChange={ this.setValueForName } />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" onChange={ this.setValueForEmail } />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" onChange={ this.setValueForMessage } ></textarea>
    </div>
    {error}
    <br></br>
    <button type="submit"  disabled={this.state.buttonstate}   onClick={this.handleClick}  className="btn btn-primary">Submit</button>
</form>
</div>
)
}
}
export default Contact