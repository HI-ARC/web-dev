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
            <CreateHeader></CreateHeader>
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
            <CreateHeader></CreateHeader>
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
            <CreateHeader></CreateHeader>
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
            <CreateHeader></CreateHeader>
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
