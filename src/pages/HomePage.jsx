import imageBeer from '../assets/beers.png';
import imageNewBeer from '../assets/new-beer.png';
import imageRandom from '../assets/random-beer.png';

import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function HomePage() {
    return (
        <div>
            <div className="card mb-3 mt-3 mx-auto w-50" style={{ width: "18rem" }}>
                <img src={imageBeer} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">All Beers</h5>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="btn btn-primary text-uppercase "><Link className="text-decoration-none text-light" to='/beers' >All beers</Link></div>
                </div>
            </div>
            <div className="card mb-3 mx-auto w-50" style={{ width: "18rem" }}>
                <img src={imageNewBeer} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">New Beer</h5>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="btn btn-primary text-uppercase"><Link className="text-decoration-none text-light" to='/new-beer' >New Beer</Link></div>
                </div>
            </div>
            <div className="card mb-3 mx-auto w-50" style={{ width: "18rem" }}>
                <img src={imageRandom} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Random Beer</h5>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="btn btn-primary text-uppercase"><Link className="text-decoration-none text-light" to='/random' >Random Beer</Link></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;