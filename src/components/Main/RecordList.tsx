import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

interface ButtonProps {}

const Button = styled.button`
  padding: 4px 6px;
  margin-right: 14px;
  font-size: 32px;
  font-color: black;
  border: none;
  border-radius: 60px;
  background-color: white;
  :hover {
    background-color: #233660;
    color: #ffffff;
  }
  @media (max-width: 750px) {
    font-size: 22px;
  }
`;

const RecordListWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  margin-left: 80px;
`;

const Divider = styled.div`
  margin-top: 4px;
  margin-left: 8%;
  border-radius: 60px;
  width: 80%;
  height: 2px;
  background-color: #233660;
`;

const RecordList: FunctionComponent = function () {
  return (
    <>
      <RecordListWrapper>
        <Button>
          <Link to="/records2021">2021</Link>
        </Button>
        <Button>
          <Link to="/records2020">2020</Link>
        </Button>
        <Button>
          <Link to="/records2019">2019</Link>
        </Button>
        <Button>
          <Link to="/records2018">2018</Link>
        </Button>
        <Button>
          <Link to="/records2017">2017</Link>
        </Button>
      </RecordListWrapper>
      <Divider></Divider>
    </>
  );
};

export default RecordList;
