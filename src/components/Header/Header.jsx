import { Navbar, StyledHeader, StyledLink } from "./Header.styled";

const Header = () => {
    return (
        <StyledHeader>
            <nav>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Navbar>
                        <StyledLink className="nav-link" aria-current="page" to="/">Home</StyledLink>
                        <StyledLink className="nav-link" to="/movies">Movies</StyledLink>
                    </Navbar>
                </div>
            </div>
            </nav>
        </StyledHeader>
    )
};

export default Header;