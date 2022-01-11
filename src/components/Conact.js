import { Component } from "react";
import React  from "react";
import '../App.css'

class Contact extends Component {
    render(){
        return(
            <div className = "App">
                <img src = "https://scontent.fgza2-3.fna.fbcdn.net/v/t1.6435-9/209800319_1498651170487735_7624053286928558713_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=cWOA1jLAqzAAX8gxvmP&_nc_ht=scontent.fgza2-3.fna&oh=00_AT9cI317A0W5GvbE0pN-hK9Z6PPPMtyU03ZAsd-gLbkAEA&oe=61F9B1AF" className ="Contact_image" ></img>
                <h1>Islam Sabri Almadani</h1>
                <a href= "https://www.facebook.com/profile.php?id=100010285984236" target ="_blank" className = "details_link">Faecbook Page</a>
                <a href="https://www.instagram.com/islammadani222/" target ="_blank" className = "details_link"> Instgram Page</a>
                
            </div>
        )
    }
}

export default Contact
