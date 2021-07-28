import React, { FunctionComponent, useState} from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Logo from 'components/Main/Logo';
import LogoHoriz from 'components/Main/LogoHoriz';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuData } from 'components/Main/MenuData';
import Menu from 'components/Main/Menu';
import { useEffect } from 'react';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6;
  max-width: 100%;
  height: 70px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuBtn = styled.div`
  margin-right: 20px;
  margin-left: auto;
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 601px) {
    display: none;
  }
`;

const SidebarWrapper = styled.div`
    position: fixed;
    z-index: 5;
    height: 100%;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    margin-top: 70px;

    @media (min-width: 601px) {
      display: none;
    }

`;

const Opened = {
    right: '-50%',
    transition: 'right 0.7s',
};

const Closed = {
    right: '0%',
    transition: 'right 0.7s',
};

const MenuWrapper = styled.div`
    height: 240px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
`;

const MenuItem = styled.div`
    height: 100%;
    font-size: 20px;
    padding-left: 40px;
    font-weight: 700;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;

    @media (min-width: 601px) {
      display: none;
    }
`;


const Header= function () {

  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => setDropdown(!dropdown);

  return (
    <>
      <HeaderWrapper>
        <Logo />
        <LogoHoriz />
        <MenuBtn onClick={showDropdown}>
          <FontAwesomeIcon icon={dropdown ? faTimes : faBars} />
        </MenuBtn>
        <Menu />
      </HeaderWrapper>
      <SidebarWrapper style={dropdown ? Closed : Opened}>
        <MenuWrapper>
          {MenuData.map((item) => {
            return (
              <MenuItem>
                <Link to={item.url}>
                  {item.title}
                </Link>
              </MenuItem>
            );
          })}
        </MenuWrapper>
      </SidebarWrapper>
    </>
  );
};

export default Header;

