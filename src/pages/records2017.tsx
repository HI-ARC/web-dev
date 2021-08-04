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
        <RecordWrapper>
          <RecordContent
            title={'ACM-ICPC Daejeon Regional'}
            problem={'http://icpckorea.org/2017/regional/problemset-2017.pdf'}
            scoreboard={'http://icpckorea.org/2017/regional/scoreboard/'}
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
              team=" Hon Gik Univ "
              member="장영석, 정윤석, 문준오"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
      </Template>
    </>
  );
};

export default RecordPage;
