import { PinDropSharp } from "@material-ui/icons";
import { propTypes } from "gatsby-plugin-image/dist/src/components/gatsby-image.server";
import React, {FunctionComponent} from "react";
import styled, {keyframes, css} from 'styled-components';

const showSidebar = keyframes`
    0% {
        display: block;
        width: 0%;
    }
    100% {
        display: block;
        width: 50%;
    }
`;

const SidebarWrapper = styled.div`
    display: none;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    ${props => props.show && css`
        animation: ${showSidebar} 1s linear;
    `}
`;

const Sidebar: FunctionComponent = function () {
    return (
        <SidebarWrapper />
    )
};

export default Sidebar;