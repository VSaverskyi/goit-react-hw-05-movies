import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    color: #212121;

    &.active {
        color: #ffffff;
    }
`;