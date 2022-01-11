import { Component } from "react";
import React  from "react";
import { Link } from "react-router-dom";

class LogIn extends Component {
    render(){
        const thing = [
            {h2 : "Name" , type : 'text'},
            {h2 : "age" , type : 'number'},
            {h2 : "Date OF Birth" , type : 'date'},
            {h2 : "Univesity Name" , type : 'text'},
            {h2 : "Email" , type : 'email'},
            {h2 : "Password" , type : 'password'},
        ]
    return(
        <div className="App">
                <h1 className="Facebook">Login With Facebook </h1>
                <h1 className="Google">Login With Google </h1>
                <Link to={`/signup`} state={thing} className="Signup" > Sign Up </Link> 
        </div>
        
        )
    }
}

export default LogIn
