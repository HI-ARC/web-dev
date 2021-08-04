import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Template from 'components/Common/Template';
import RecordList from 'components/Main/RecordList';
import RecordContent from 'components/Main/RecordContent';
import TableTemplate from 'components/Common/TableTemplate';

const RecordWrapper = styled.div`
  width: 1000px;
  height: 250px;
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
        <RecordWrapper>
          <RecordContent
            title={'SUAPC 2021 Winter'}
            problem={'https://archive.suapc.kr/2021w/problem/'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/586'}
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
