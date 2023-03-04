import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function RandomBeer() {
    const [randombeer, setRandom] = useState(null);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(result => {
                setRandom(result.data)
                alert('submited has been succes')
            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <div>
            <NavBar />
            {randombeer && 
            <div className="card mt-5" >
                <div className="col-md-1 mx-auto">
                    <img src={randombeer.image_url} className="card-img-top" alt="beer" />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{randombeer.name}</h5>
                    <span>{randombeer.attenuation_level}</span>
                    <p className="card-text">{randombeer.tagline}<small className="text-muted">{randombeer.first_brewed}</small></p>
                    <p className="card-text">{randombeer.description}</p>
                    <p className="card-text"><small className="text-muted">{randombeer.contributed_by}</small></p>
                </div>
            </div>
            }
        </div>
    )
}

export default RandomBeer;