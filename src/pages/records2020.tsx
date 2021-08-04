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

const RecordWrapperExtra = styled.div`
  width: 1000px;
  height: 260px;
  margin-left: 125px;
  padding-top: 30px;
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
    border-bottom: 1.25px solid #444444;
    border-collapse: collapse;
    white-space: normal;
  }
`;

const RecordPage: FunctionComponent = () => {
  return (
    <>
      <Template title="Records">
        <RecordList></RecordList>
        {/*UCPC 2020 예선*/}
        <RecordWrapper>
          <RecordContent
            title={'UCPC 2020 예선'}
            problem={'https://www.acmicpc.net/category/detail/2270'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/521'}
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
              prize="28"
              team="율촌 "
              member="정연두, 김효원, 정재현"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        {/*UCPC 2020 본선*/}
        <RecordWrapper>
          <RecordContent
            title={'UCPC 2020 본선'}
            problem={'https://www.acmicpc.net/category/detail/2272'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/524'}
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
              prize="34"
              team="율촌 "
              member="정연두, 김효원, 정재현"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        {/*SUAPC 2020 Summer - Div. 1*/}
        <RecordWrapper>
          <RecordContent
            title={'SUAPC 2020 Summer - Div. 1'}
            problem={'https://www.acmicpc.net/category/detail/2274'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/519'}
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
              prize="8"
              team="사과는 맛있어 "
              member="김경근, 정재현, 백지웅"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        {/*SUAPC 2020 Summer - Div. 2*/}
        <RecordWrapperExtra>
          <RecordContent
            title={'SUAPC 2020 Summer - Div. 2'}
            problem={'https://www.acmicpc.net/category/detail/2275'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/518'}
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
              prize="4"
              team="기시디한테 롤 진 팀"
              member="노정윤, 김도현, 김연욱"
            ></TableTemplate>
            <TableTemplate
              prize="6 "
              team="안녕히계세요여러분전이세상의모든굴레와속박을벗어던지고제행복을찾아떠납니다여러분도행복하세요 "
              member="고민재, 권예빈, 권찬"
            ></TableTemplate>
            <TableTemplate
              prize="8"
              team="team protocol "
              member=" 반보영, 박장성, 엄경호"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapperExtra>
      </Template>
    </>
  );
};

export default RecordPage;
