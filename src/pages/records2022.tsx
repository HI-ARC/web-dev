import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Template from 'components/Common/Template';
import RecordList from 'components/Main/RecordList';
import RecordContent from 'components/Main/RecordContent';
import { TableTemplate, CreateHeader, CreateHeaderSolo } from 'components/Common/TableTemplate';

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
    vertical-align: middle;
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
  margin-left: 10vw;
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

const Update = styled.text`
  margin-top: 2vh;
  font-size: 20px;
  color: gray;
  width: 80%;
  height: 30%;
  margin-left: 2vw;
  display: grid;
  @media (max-width: 750px) {
    display: none;
  }
`;

const RecordPage: FunctionComponent = () => {
  return (
    <>
      <Template title="Records">
        <RecordList></RecordList>
        
        <RecordWrapper>
          {/*2022 ICPC Sinchon Winter Algorithm Camp Contest (초급)*/}
          <RecordContent
            title={'2022 ICPC Sinchon Winter Algorithm Camp Contest (초급)'}
            problem={'https://www.acmicpc.net/category/detail/3028'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/759'}
          ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>
            <TableTemplate
              prize="2"
              team="개인"
              member="이지은"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        <TableDivider></TableDivider>

        <RecordWrapper>
          {/*SUAPC 2022 Winter*/}
          <RecordContent
            title={'SUAPC 2022 Winter'}
            problem={'https://archive.suapc.kr/2022w/problem/'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/764'}
          ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>
            <TableTemplate
              prize="3"
              team="정열맨"
              member="김도현, 김재헌, 정재현"
            ></TableTemplate>

            <TableTemplate
              prize="21"
              team="버블티에커피와카모마일을첨가해보았어요"
              member="이지은, 김성민, 정재현"
            ></TableTemplate>

            <TableTemplate
              prize="28"
              team="완주가목표"
              member="김기선, 김범준, 조규형"
            ></TableTemplate>

            <TableTemplate
              prize="32"
              team="BLAZINGdevs"
              member="전지수, 김다연, 안재현"
            ></TableTemplate>

            <TableTemplate
              prize="34"
              team="우승못하면 전학감"
              member="조상욱, 박준서, 김한성"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        <TableDivider></TableDivider>

        {/*UCPC 2022 예선*/}
        <RecordWrapper>
          <RecordContent
            title={'UCPC 2022 예선'}
            problem={'https://www.acmicpc.net/category/detail/3147'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/827'}
          ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>
            <TableTemplate
              prize="48"
              team="정열맨"
              member="김도현, 김재헌, 정재현"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        <TableDivider></TableDivider>
        
        {/*UCPC 2022 본선*/}
        <RecordWrapper>
          <RecordContent
            title={'UCPC 2022 본선'}
            problem={'https://www.acmicpc.net/category/detail/3147'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/828'}
          ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>
            <TableTemplate
              prize="31"
              team="정열맨"
              member="김도현, 김재헌, 정재현"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        <TableDivider></TableDivider>

        {/*SUAPC 2022 Summer*/}
        <RecordWrapper>
          <RecordContent
            title={'SUAPC 2022 Summer'}
            problem={'https://archive.suapc.kr/2022s/problem/'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/840'}
          ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>
            <TableTemplate
              prize="4"
              team="정열맨"
              member="김도현, 김재헌, 정재현"
            ></TableTemplate>
            <TableTemplate
              prize="28"
              team="긏깒깉깛궢귪궭귗귪"
              member="김성민, 이지은, 안재현"
            ></TableTemplate>
            <TableTemplate
              prize="34"
              team="(H)I-DLE"
              member="이혁, 이수현, 남예준"
            ></TableTemplate>
            <TableTemplate
              prize="37"
              team="무명"
              member="최윤창, 전정현, 심동현"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>

        {/*Google Kick Start 2022*/}
        <RecordWrapper>
          <RecordContent
            title={'Google Kick Start 2022'}
          ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>
            <TableTemplate
              prize="30"
              team="개인"
              member="김재헌"
            ></TableTemplate>
            <Update>
              <p>* 문제 및 스코어보드 링크 업데이트 예정입니다.</p>
            </Update>
          </TableWrapper>
        </RecordWrapper>

        {/*SCPC 2022 예선*/}
        <RecordWrapper>
          <RecordContent
            title={'SCPC 2022 예선'}
          ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>
            <TableTemplate
              prize="본선진출"
              team="개인"
              member="김재헌"
            ></TableTemplate>
            <Update>
              <p>* 문제 및 스코어보드 링크 업데이트 예정입니다.</p>
            </Update>
          </TableWrapper>
        </RecordWrapper>

        {/*`22 현대모비스 알고리즘 경진대회*/}
        <RecordWrapper>
          <RecordContent
            title={'`22 현대모비스 알고리즘 경진대회'}
          ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>
            <TableTemplate
              prize="장려상"
              team="개인"
              member="김재헌"
            ></TableTemplate>
            <Update>
              <p>* 문제 및 스코어보드 링크 업데이트 예정입니다.</p>
            </Update>
          </TableWrapper>
        </RecordWrapper>

        {/*홍익대학교 HI-ARC 프로그래밍 경진대회*/}
        <RecordWrapper>
          <RecordContent
            title={'2022 홍익대학교 HI-ARC 프로그래밍 경진대회'}
            problem={'https://www.acmicpc.net/contest/view/883'}
            scoreboard={'https://www.acmicpc.net/contest/board/883'}
          ></RecordContent>
          <TableWrapper>
            <CreateHeaderSolo></CreateHeaderSolo>
            <TableTemplate
              prize="2"
              team="금상"
              member="김건회"
            ></TableTemplate>
            <TableTemplate
              prize="3"
              team="금상"
              member="한승준"
            ></TableTemplate>
            <TableTemplate
              prize="5"
              team="은상"
              member="구재혁"
            ></TableTemplate>
            <TableTemplate
              prize="8"
              team="은상"
              member="이지은"
            ></TableTemplate>
            <TableTemplate
              prize="10"
              team="저학년 특별상"
              member="이형민"
            ></TableTemplate>
            <TableTemplate
              prize="12"
              team="저학년 특별상"
              member="문창일"
            ></TableTemplate>
            <TableTemplate
              prize="14"
              team="저학년 특별상"
              member="이혁"
            ></TableTemplate>
            <TableTemplate
              prize="22"
              team="저학년 특별상"
              member="윤승혁"
            ></TableTemplate>
            <TableTemplate
              prize="29"
              team="저학년 특별상"
              member="최윤창"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        <br />
        <br />
      </Template>
    </>
  );
};

export default RecordPage;
