import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/movies">Movies</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Header;