import "../App.css"
import { useLocation } from 'react-router-dom'

function Card(props) {
    const location = useLocation()

    return (
        <div>
            <div>
                <h1 className="details_header">{location.state.name}</h1>
                <div className="details_div">
               
                <img src={location.state.url} className="details_image" alt='img' />
                </div>
                <h2 className="details_h2">The Location :</h2>
                <p className="details_par">{location.state.country}</p>
                <h2 className="details_h2">Description :</h2>
                <p className="details_par">{location.state.description}</p>
                <a href={location.state.web_pages[0]} target="_blank" className='details_link' id="details_link" rel="noreferrer" >University web page</a>

            </div>
        </div>
    )
}

export default Card;