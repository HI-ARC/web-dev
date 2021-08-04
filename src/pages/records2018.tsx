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
        {/*이데일리 코딩 챌린지*/}
        <RecordWrapper>
          <RecordContent
            title={'이데일리 코딩 챌린지'}
            problem={'https://www.edaily.co.kr/'}
            scoreboard={'https://www.edaily.co.kr/'}
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
              prize="6"
              team=" 개인 "
              member="정연두"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        {/*카카오 코드 페스티벌*/}
        <RecordWrapper>
          <RecordContent
            title={'카카오 코드 페스티벌'}
            problem={'https://www.acmicpc.net/category/detail/1897'}
            scoreboard={'https://kakaocode.com/scoreboard/'}
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
              prize="본선진출"
              team=" 개인 "
              member="정연두"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        {/*UCPC 예선*/}
        <RecordWrapper>
          <RecordContent
            title={'UCPC 예선'}
            problem={'https://www.acmicpc.net/category/detail/1891'}
            scoreboard={'https://www.acmicpc.net/contest/scoreboard/307'}
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
              prize="58"
              team=" KodingWarrior Squad "
              member="이재열, 문준오, 정연두"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        {/*ACM-ICPC Seoul Regional*/}
        <RecordWrapper>
          <RecordContent
            title={'ACM-ICPC Seoul Regional'}
            problem={'http://icpckorea.org/2018/regional/problemset-2018.pdf'}
            scoreboard={'http://icpckorea.org/2018/regional/scoreboard/'}
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
              prize="Honorable Mention"
              team=" bye-arc "
              member="김민균, 김형석, 유지혁 "
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
      </Template>
    </>
  );
};

export default RecordPage;
