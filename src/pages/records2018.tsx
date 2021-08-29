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
    document.getElementById("2018").style.background='#233660';
    document.getElementById("2018").style.color='#ffffff';
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
        <TableDivider/>
        
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
        <TableDivider></TableDivider>
        {/*UCPC 예선*/}
        <RecordWrapper>
          <RecordContent
            title={'UCPC 2018 예선'}
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
        <TableDivider></TableDivider>
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
              prize="HM"
              team=" bye-arc "
              member="김민균, 김형석, 유지혁 "
            ></TableTemplate> 
            <br/>
            <p style={{color:`gray`}}> &nbsp;&nbsp;&nbsp;&nbsp;* HM = Honorable Mention</p>
          </TableWrapper>
        </RecordWrapper>
        <br/><br/>
      </Template>
    </>
  );
};

export default RecordPage;
