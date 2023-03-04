import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";

function SingleBeer() {
    const { id } = useParams();

    const [singlebeer, setBeer] = useState({});

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(result => {
                setBeer(result.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <NavBar />
            <div className="card-group mx-auto">
                {singlebeer &&
                    <div className="card mt-5" >
                        <div className="col-md-1 mx-auto">
                            <img src={singlebeer.image_url} className="card-img-top" alt="beer" />
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">{singlebeer.name}</h5>
                            <span>{singlebeer.attenuation_level}</span>
                            <p className="card-text">{singlebeer.tagline}<small className="text-muted">{singlebeer.first_brewed}</small></p>
                            <p className="card-text">{singlebeer.description}</p>
                            <p className="card-text"><small className="text-muted">{singlebeer.contributed_by}</small></p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default SingleBeer;


