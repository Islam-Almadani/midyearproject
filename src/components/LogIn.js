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
        thing.map((it) => { 
            return(
                <div className = "App">
                    <h2>{it.h2} :</h2>
                    <input type = {it.type} className ="input" placeholder={`Your ${it.h2}..`}/>
                    
                </div>
            )
        }))
    }
}

export default LogIn
