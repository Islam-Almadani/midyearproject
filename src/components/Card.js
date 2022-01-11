import "../App.css"
import { useLocation } from 'react-router-dom'

function Card(props) {
    const location = useLocation()

    return (
        <div>
            <div className="App">
                <h1 className="details_header">{location.state.name}</h1>
                <img src={location.state.url} className="details_image" alt='img' />

                <ul id="li">
                    <li className="details_li"> Location : {location.state.country}</li>
                    <li className="details_li"> description : {location.state.description}</li>
                </ul>
                <a href={location.state.web_pages[0]} target="_blank" className='details_link' rel="noreferrer" >University web page</a>

            </div>
        </div>
    )
}

export default Card;