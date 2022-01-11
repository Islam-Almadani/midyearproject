import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";



class Save extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h1 className="details_header">Saved Universities</h1>
                {this.props.name && this.props.name.map((it) => {
                    return (
                        <div className='UniDiv'>
                            <img src={it.url} className="image"></img>
                            <h2 className="h3">{it.name} </h2>
                            <Link to={`/details/${it.name}`} state={it} className="details" > More Details </Link>
                        </div>
                    )
                })}</>


        )
    }
}

export default Save;
