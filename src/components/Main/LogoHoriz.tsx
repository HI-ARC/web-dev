import React, {FunctionComponent} from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import Horiz from '../../../contents/hiarc_logo_horiz.png';

const Logo = styled.img`
    width: 130px;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
    margin-top: 5px;
    margin-left: 40px;
    cursor: pointer;
    @media (max-width: 680px) {
        display: none;
    }
`;

const LogoHoriz: FunctionComponent = function () {
    return (
        <Link to='/'>
            <Logo src={Horiz} />
        </Link>
    )
};

export default LogoHoriz;