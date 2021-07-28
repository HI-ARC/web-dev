import React, { FunctionComponent, useState} from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Logo from 'components/Main/Logo';
import LogoHoriz from 'components/Main/LogoHoriz';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuData } from 'components/Main/DropdownData';
import Menu from 'components/Main/Menu';

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

const MenuList = styled.div`
    position: fixed;
    z-index: 5;
    right: 0;
    width: 100%;
    height: 250px;
    background-color: rgba(255, 255, 255, 0.7);
    grid-template-rows: 1fr 1fr 1fr;
    margin-top: 70px;
    border-radius: 0 0 20px 20px;

    @media (min-width: 601px) {
      height: 0;
    }
    
`;

const MenuItem = styled.div`
    height: 100%;
    font-size: 20px;
    padding-left: 40px;
    font-weight: 700;
    //box-shadow: 0px 1px 2px rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    //color: white;

    @media (min-width: 601px) {
      display: none;
    }
`;


const Header: FunctionComponent = function () {

  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => setDropdown(!dropdown);

  return (
    <>
      <HeaderWrapper>
        <Logo />
        <LogoHoriz />
        <Menu />
      </HeaderWrapper>
      <MenuList style={ dropdown ? {display: "grid"} : {display: "none"}}>
        {MenuData.map((item, index) => {
          return (
            <MenuItem style={(index === MenuData.length - 1) ? {boxShadow: "none"} : {boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.2)"}}>
              <Link to={item.url}>
                {item.title}
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </>
  );
};

export default Header;

/*
<MenuBtn onClick={showDropdown}>
          <FontAwesomeIcon icon={dropdown ? faTimes : faBars} />
        </MenuBtn>
*/