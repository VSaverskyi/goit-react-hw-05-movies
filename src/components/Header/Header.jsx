import { StyledLink } from "./Header.styled";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <StyledLink className="nav-link" aria-current="page" to="/">Home</StyledLink>
                        <StyledLink className="nav-link" to="/movies">Movies</StyledLink>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Header;