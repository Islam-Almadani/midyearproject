import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import Contact from "./Conact";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            save: '',
        };
        this.change = this.change.bind(this);
    }
    change(islam) {
        this.setState({ save: islam });
        console.log(this.state.save);
    }
    render() {
        return (
            this.props.name.map((it) => {
                return (
                    <div className='UniDiv'>
                        <img src={it.url} className="image"></img>
                        <h2 className="h3">{it.name} </h2>
                        <Link to={`/details/${it.name}`} state={it} className="details" > More Details </Link>
                        <button className='details_link' onClick={() => this.props.name1(it)}>Save</button>
                    </div>
                )
            }))
    }
}
export default Home;
