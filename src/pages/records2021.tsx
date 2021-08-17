import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Template from 'components/Common/Template';
import RecordList from 'components/Main/RecordList';
import RecordContent from 'components/Main/RecordContent';
import {TableTemplate, CreateHeader} from 'components/Common/TableTemplate';

const RecordWrapper = styled.div`
  width: 80%;
  height: 60vh;
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

const RecordPage: FunctionComponent = () => {
  return (
    <>
      <Template title="Records">
        <RecordList></RecordList>
        <RecordWrapper>
          <RecordContent
            title={'SUAPC 2021 Winter'}
            problem={'https://archive.suapc.kr/2021w/problem/'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/586'}
          ></RecordContent>
          <TableWrapper>
              <CreateHeader></CreateHeader>
            <TableTemplate
              prize="11"
              team="불건전한 소환사명 123 "
              member="김경민, 김도현, 권찬"
            ></TableTemplate>

            <TableTemplate
              prize="13"
              team="민초의 난"
              member="김기선, 김효원, 정재현"
            ></TableTemplate>

            <TableTemplate
              prize="24"
              team="역시 형이야 구하러 왔구나 아니 나도 잡혔어"
              member="고민재, 권예빈, 박장성"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
      </Template>
    </>
  );
};

export default RecordPage;
