import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Template from 'components/Common/Template';
import RecordList from 'components/Main/RecordList';
import RecordContent from 'components/Main/RecordContent';
import {TableTemplate, CreateHeader} from 'components/Common/TableTemplate';

const RecordWrapper = styled.div`
  width: 80%;
  height: 40vh;
  margin-left: 10vw;
  margin-top: 7vh;
  padding-bottom: -10vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 750px) {
    height: 35vh;
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
    width: 95%;
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
        {/*UCPC 2019 예선*/}
        <RecordWrapper>
          <RecordContent
            title={'UCPC 2019 예선'}
            problem={'https://www.acmicpc.net/category/detail/2053'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/449'}
          ></RecordContent>
          <TableWrapper>
            <tr>
            <CreateHeader></CreateHeader>
            </tr>
            <TableTemplate
              prize="35"
              team=" 삼성님들충성충성^^7 "
              member="김종욱, 정연두, 정윤석"
            ></TableTemplate>
           <TableDivider></TableDivider>
          </TableWrapper>
        </RecordWrapper>
        {/*UCPC 2019 본선*/}
        <RecordWrapper>
          <RecordContent
            title={'UCPC 2019 본선'}
            problem={'https://www.acmicpc.net/category/detail/2054'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/450'}
          ></RecordContent>
          <TableWrapper>
            <tr>
            <CreateHeader></CreateHeader>
            </tr>
            <TableTemplate
              prize="32"
              team=" 삼성님들충성충성^^7 "
              member="김종욱, 정연두, 정윤석"
            ></TableTemplate>
            <TableDivider></TableDivider>
          </TableWrapper>
        </RecordWrapper>
        {/*ACM-ICPC Seoul Regional*/}
        <RecordWrapper>
          <RecordContent
            title={'ACM-ICPC Seoul Regional'}
            problem={'http://icpckorea.org/2019/regional/problems.pdf'}
            scoreboard={'http://icpckorea.org/2019/regional/scoreboard/'}
          ></RecordContent>
          <TableWrapper>
            <tr>
            <CreateHeader></CreateHeader>
            </tr>
            <TableTemplate
              prize="16"
              team=" Advanced Algorithm Study"
              member="김종욱, 정연두, 정윤석"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
      </Template>
    </>
  );
};

export default RecordPage;
