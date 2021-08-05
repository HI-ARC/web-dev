import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Template from 'components/Common/Template';
import RecordList from 'components/Main/RecordList';
import RecordContent from 'components/Main/RecordContent';
import TableTemplate from 'components/Common/TableTemplate';

const RecordWrapper = styled.div`
  width: 1000px;
  height: 190px;
  margin-left: 125px;
  padding-top: 3%;
  padding-bottom: -10%;
  display: flex;
  flex-direction: row;
`;

const TableWrapper = styled.div`
  width: 700px;
  margin-left: 80px;
  margin-top: 10px;
  height: 175px;
  color: black;
  table {
    table-layout: fixed;
    width: 100%;
  }
  td {
    text-align: center;
    font-size: 21px;
    padding-top: 2px;
    padding-bottom: 2.5px;
    border-bottom: 1.25px solid gray;
    border-collapse: collapse;
    white-space: normal;
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
              <TableTemplate
                prize="🏆"
                team="TEAM"
                member="MEMBER"
              ></TableTemplate>
            </tr>
            <TableTemplate
              prize="35"
              team=" 삼성님들충성충성^^7 "
              member="김종욱, 정연두, 정윤석"
            ></TableTemplate>
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
              <TableTemplate
                prize="🏆"
                team="TEAM"
                member="MEMBER"
              ></TableTemplate>
            </tr>
            <TableTemplate
              prize="32"
              team=" 삼성님들충성충성^^7 "
              member="김종욱, 정연두, 정윤석"
            ></TableTemplate>
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
              <TableTemplate
                prize="🏆"
                team="TEAM"
                member="MEMBER"
              ></TableTemplate>
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
