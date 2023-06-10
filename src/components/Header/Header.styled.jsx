import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: #000000;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  padding: 24px 16px;

    &.active {
      background-color: #04AA6D;
      color: white;
    }
`;

export const StyledHeader = styled.header`
width: 1200px;
`;

export const Navbar = styled.div`
  display: flex;
  padding: 20px;
  background-color: teal;
  color: #fff;
`;