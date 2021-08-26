import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Logo from 'components/Main/Logo';
import LogoHoriz from 'components/Main/LogoHoriz';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuData } from 'components/Main/MenuData';
import Menu from 'components/Main/Menu';
import GlobalFonts from '../../fonts/fonts';

const Slogan = styled.div`
  position: absolute;
  color: #233660;
  font-size: 14px;
  z-index: 4;
  //margin-top: 510px;
  //margin-left: -240px;
  margin-left: 200px;
  font-weight: 500;
  font-family: 'IBM Plex Mono', monospace;

  @media (max-width: 825px) {
    display: none;
  }
`;

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
  transition: all 0.2s;
  &.hide {
    top: -70px;
    transition: all 0.3s;
  }

  @media (max-width: 499px) {
    height: 14vw;
  }
`;

const MenuBtn = styled.div`
  margin-right: 20px;
  margin-left: auto;
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 601px) {
    display: none;
  }

  @media (max-width: 500px) {
    font-size: 5vw;
    margin-right: 5vw;
  }
`;
//-------Sidebar-------//
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

  @media (max-width: 500px) {
    margin-top: 14vw;
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

  @media (max-width: 500px) {
    height: 50vw;
  }
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

  @media (max-width: 500px) {
    font-size: 4.5vw;
  }
`;

const throttle = (callback, waitTime) => {
  let timerId = null;
  return e => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback.call(this, e);
      timerId = null;
    }, waitTime);
  };
};

const Header: FunctionComponent = () => {
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 50);

  if (typeof document !== 'undefined') {
    const documentRef = useRef(document);

    useEffect(() => {
      documentRef.current.addEventListener('scroll', throttleScroll);
      return () =>
        documentRef.current.removeEventListener('scroll', throttleScroll);
    }, [pageY]);
  }

  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => setDropdown(!dropdown);

  return (
    <>
      <HeaderWrapper className={hide && 'hide'}>
        <Logo />
        <LogoHoriz />
        <Slogan>/* Solve with Us! */</Slogan>
        <MenuBtn onClick={showDropdown}>
          <FontAwesomeIcon icon={dropdown ? faTimes : faBars} />
        </MenuBtn>
        <Menu />
      </HeaderWrapper>
      <SidebarWrapper style={dropdown ? Closed : Opened}>
        <MenuWrapper>
          {MenuData.map(item => {
            return (
              <MenuItem>
                <Link to={item.url}>{item.title}</Link>
              </MenuItem>
            );
          })}
        </MenuWrapper>
      </SidebarWrapper>
    </>
  );
};

export default Header;
