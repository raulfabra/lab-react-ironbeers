import { Link } from "react-router-dom";

function NavBar() {
    return (
            <nav className="navbar navbar-dark bg-primary d-flex justify-content-center">
                <Link to = "/" ><i className="fa-solid fa-house text-light text-center"></i></Link>
            </nav>
    )
}

export default NavBar;