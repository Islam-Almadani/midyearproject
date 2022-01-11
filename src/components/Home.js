import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            save: '',
            isSaved: 'Save',
        };
        this.change = this.change.bind(this);
        this.saved = this.saved.bind(this);
    }
    change(islam) {
        this.setState({ save: islam });
        console.log(this.state.save);
    }
    saved() {
        this.setState({ isSaved: 'Saved' })
    }
    render() {
        return (
            this.props.name.map((it) => {
                return (
                    <div className='UniDiv'>
                        <img src={it.url} className="image"></img>
                        <h2 className="h3">{it.name} </h2>
                        <Link to={`/details/${it.name}`} state={it} className="details" > More Details </Link>
                        <button className='details_link' onClick={() => this.props.name1(it)}>{this.state.isSaved}</button>
                    </div>
                )
            }))
    }
}
export default Home;
