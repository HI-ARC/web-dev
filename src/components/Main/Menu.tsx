import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const MenuList = styled.div`
  width: 40%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  margin-right: 20px;
  margin-left: auto;
  font-size: 16px;
  font-weight: 700;

  @media (min-width: 750px) {
    width: 300px;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const Menu: FunctionComponent = function () {
  return (
    <>
      <MenuList>
        <Link to="/records2021">기록</Link>
        <Link to="/study/">스터디</Link>
        <Link to="/communication">친목</Link>
      </MenuList>
    </>
  );
};

export default Menu;
