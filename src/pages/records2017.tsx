import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Template from 'components/Common/Template';
import RecordList from 'components/Main/RecordList';
import RecordContent from 'components/Main/RecordContent';
import {TableTemplate, CreateHeader} from 'components/Common/TableTemplate';

const RecordWrapper = styled.div`
  width: 80vw;
  min-height: 14rem;
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
  @media (max-width: 375px) {
    min-height: 16vh;
    margin-left: 10%;
    display: grid;
  }
`;
const TableWrapper = styled.div`
  width: 80%;
  min-height: 20vh;
  color: black;
  font-size: 21px;
  table {
    margin-left: 1.5vw;
    border-top: 1.25px solid #444444;
    table-layout: fixed;
    width: 96%;
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
    width: 90%;
    margin-left: 3vw;
    font-size: 20px;
  }
  @media (max-width: 550px) {
    width: 72%;
    margin-left: 1rem;
    font-size: 18px;
  }
  @media (max-width: 375px) {
    width: 90%;
    margin-top: 1vh;
    font-size: 16px;
    min-height: 10vh;
    margin-left: 0vw;
    display: grid;
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
    margin-top: 0vh;
  }
`;

const RecordPage: FunctionComponent = () => {
  return (
    <>
      <Template title="Records">
        <RecordList></RecordList>
        {/*ACM-ICPC Daejeon Regional - 2017*/}
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
          <TableDivider></TableDivider>

          {/*교내 프로그래밍 경진대회 - 2017*/}
          <RecordWrapper>
          <RecordContent
            title={'교내 프로그래밍 경진대회 - 2017'}
          ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>
            <TableTemplate
              prize="3"
              team="개인"
              member="정윤석"
            ></TableTemplate>
            <TableTemplate
              prize="6"
              team="개인"
              member="문준오"
            ></TableTemplate>
            <TableTemplate
              prize="7"
              team="개인"
              member="김민호"
            ></TableTemplate>
            <TableTemplate
              prize="9"
              team="개인"
              member="이재열"
            ></TableTemplate>
            <TableTemplate
              prize="12"
              team="개인"
              member="장영석"
            ></TableTemplate>
             <TableTemplate
              prize="16"
              team="개인"
              member="이승범"
            ></TableTemplate>
            <TableTemplate
            prize="18"
            team="개인"
            member="이준희"
          ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        <br/><br/>
      </Template>
    </>
  );
};

export default RecordPage;
