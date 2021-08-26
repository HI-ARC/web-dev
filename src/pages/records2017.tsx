import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Template from 'components/Common/Template';
import RecordList from 'components/Main/RecordList';
import RecordContent from 'components/Main/RecordContent';
import {TableTemplate, CreateHeader} from 'components/Common/TableTemplate';

const RecordWrapper = styled.div` 
  width: 80vw;
  min-height: 10rem;
  margin-left: 10vw;
  margin-top: 7vh;
  margin-bottom: 3vh; 
  display: flex;
  flex-direction: row;
  @media (max-width: 750px) {
    min-height: 32vh;
    margin-left: 10%;
    display: grid;
  }

`;
const TableWrapper = styled.div`

  width: 65vw;
  min-height: 20vh;
  color: black;
  font-size: 21px;
  
  table {
    margin-left: 1.5vw;
    border-top: 1.25px solid #444444;
    table-layout: fixed;
    width: 95%;
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
    width: 92%;
    margin-left: 3vw;
    font-size: 20px;
  }
`;

const TableDivider = styled.div`
  margin-top: 3vh;
  margin-left:10vw;
  width: 80vw;
  height: 0.25px;
  background-color: #233660;
  @media (max-width: 750px) {
    width: 80%;
    background-color: white;
    border-bottom: 1.5px dashed;
    margin-left: 10vw;
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
