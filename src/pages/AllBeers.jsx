import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function AllBeers({ beers }) {
    
    return (
        <div>
            <NavBar />
            {beers.map(beer => {
                return (
                    <div key = {beer._id} className="card mb-3 mt-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src={beer.image_url} className="img-fluid rounded-start" alt="beer" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <Link to={`/beers/${beer._id}`} className="text-decoration-none text-dark" ><h4 className="card-title">{beer.name}</h4></Link>
                                    <p className="card-text">{beer.tagline}</p>
                                    <p className="card-text"><small className="text-muted"><b>Created by: </b> {beer.contributed_by}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeers;



