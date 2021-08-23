import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Template from 'components/Common/Template';
import RecordList from 'components/Main/RecordList';
import RecordContent from 'components/Main/RecordContent';
import {TableTemplate, CreateHeader} from 'components/Common/TableTemplate';

const RecordWrapper = styled.div`
  width: 80%;
  height: 30vh;
  margin-left: 10vw;
  margin-top: 7vh;
  padding-bottom: -10vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 750px) {
    height: 40vh;
    margin-left: 10%;
    display: grid;
  }
`;
const TableWrapper = styled.div`
  width: 65vw;
  margin: 2vh 0px 0px 3vw;
  height: 40vh;
  color: black;
  font-size: 21px;
  table {
    border-top: 1.25px solid #444444;
    table-layout: fixed;
    width: 95%;
    margin-left: 1vw;
    vertical-align : middle;
    text-align: center;
    
  }
  td {
    padding-top: 2px;
    padding-bottom: 2.5px;
    border-collapse: collapse;
    white-space: normal;
  }
  @media (max-width: 750px) {
    width: 100%;
    height: 40vh;
    margin-left: 3vw;
    margin-top: -8vh;
    font-size: 20px;
  }
`;

const TableDivider = styled.div`
  margin-top: 3vh;
  margin-left: -18vw;
  width: 80vw;
  height: 0.25px;
  background-color: #233660;
  @media (max-width: 750px) {
    background-color: white;
    border-bottom: 1.5px dashed;
    margin-left: 1vw;
    margin-top: 3vh;
  }
`;


const RecordPage: FunctionComponent = () => {
  return (
    <>
      <Template title="Records">
        <RecordList></RecordList>
        <RecordWrapper>
          <RecordContent
            title={'ACM-ICPC Daejeon Regional'}
            problem={'http://icpckorea.org/2017/regional/problemset-2017.pdf'}
            scoreboard={'http://icpckorea.org/2017/regional/scoreboard/'}
          ></RecordContent>
          <TableWrapper>
            <tr>
            <CreateHeader></CreateHeader>
            </tr>
            <TableTemplate
              prize="HM"
              team=" Hon Gik Univ "
              member="장영석, 정윤석, 문준오"
            ></TableTemplate>
            <br/>
            <p style={{color:`gray`}}> &nbsp;&nbsp;&nbsp;&nbsp;* HM = Honorable Mention</p>
          </TableWrapper>
        </RecordWrapper>
      </Template>
    </>
  );
};

export default RecordPage;
