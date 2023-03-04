import { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";

function NewBeer() {

    const [name , setName] = useState("");
    const [tagline , setTagline] = useState("");
    const [description , setDescription] = useState("");
    const [first_brewed , setFirstBrewed] = useState("");
    const [brewed_tips , setBrewed_tips] = useState("");
    const [attenuation_level , setAttenuation] = useState("");
    const [contributed , setContributed] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new",{name, tagline, description, first_brewed, brewed_tips, attenuation_level, contributed})
        .then (res => {
            setName("");
            setTagline("");
            setDescription("");
            setFirstBrewed("");
            setBrewed_tips("");
            setAttenuation("");
            setContributed("");
            console.log(res)
        })

    }

    return (
        <div>
            <NavBar />
            <div className="card w-50 mt-5 ms-4">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="htmlForm-label">NAME:  </label>
                        <input type="text" className="htmlForm-control ms-2" id="exampleInputName" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)}/>
                        <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputTagline" className="htmlForm-label">TAGLINE:  </label>
                        <input type="text" className="htmlForm-control ms-2" id="exampleInputTagline" value={tagline} onChange={(e) => setTagline(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputDescription" className="htmlForm-label">DESCRIPTION:  </label>
                        <input type="text" className="htmlForm-control ms-2" id="exampleInputDescription" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputFirst_Brewed" className="htmlForm-label">FIRST_BREWED:  </label>
                        <input type="text" className="htmlForm-control ms-2" id="exampleInputFirst_Brewed" value={first_brewed} onChange={(e) => setFirstBrewed(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputBrewers_tips" className="htmlForm-label">BREWERS_TIPS:  </label>
                        <input type="text" className="htmlForm-control ms-2" id="exampleInputBrewers_tips" value={brewed_tips} onChange={(e) => setBrewed_tips(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputAttenuation" className="htmlForm-label">ATTENUATION:  </label>
                        <input type="Number" className="htmlForm-control ms-2" id="exampleInputAttenuation" value={attenuation_level} onChange={(e) => setAttenuation(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputContributed" className="htmlForm-label">CONTRIBUTED_BY:  </label>
                        <input type="text" className="htmlForm-control ms-2" id="exampleInputContributed" value={contributed} onChange={(e) => setContributed(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Create New Beer</button>
                </form>
            </div>
        </div>
    )
}

export default NewBeer;