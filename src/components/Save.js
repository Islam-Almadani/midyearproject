import { Component } from "react";
import React  from "react";


class Save extends Component {
    constructor(props){
        super(props); 
    }
    render(){
        return(
            <>
            <h1>Saved Universyies</h1>
            { this.props.name && this.props.name.map((it) => {
                return (
                    <div className='UniDiv'>
                        <img src={it.url} className="image"></img>
                        <h2 className="h3">{it.name} </h2>
                        <button className='details_link' onClick={() => this.props.name1(it)}>Save</button>
                    </div>
                )
            })}</>
            
            
        )
    }
}

export default Save;
