import { Component } from "react";
import React from "react";
import { useLocation } from 'react-router-dom'

function Signup() {
    const location = useLocation()
    return (
        <div className="App">
            {location.state.map((it) => {
                return (
                    <div className="App">
                        <h2>{it.h2} :</h2>
                        <input type={it.type} className="input" placeholder={`Your ${it.h2}..`} />
                    </div>
                )
            })}
            <input type="submit" value="Sign up" className="details_link" id="signup" />
        </div>
    )
}

export default Signup;