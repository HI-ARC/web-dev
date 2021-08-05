import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Template from 'components/Common/Template';
import RecordList from 'components/Main/RecordList';
import RecordContent from 'components/Main/RecordContent';
import TableTemplate from 'components/Common/TableTemplate';

const RecordWrapper = styled.div`
  width: 80%;
  height: 62vh;
  margin-left: 8vw;
  padding-top: 3vh;
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
  width: 60vw;
  margin-left: 1vw;
  margin-top: 10px;
  height: 55vh;
  color: black;
  font-size: 21px;
  table {
    border-top: 1.25px solid #444444;
    table-layout: fixed;
    width: 95%;
  }
  td {
    text-align: center;
    padding-top: 2px;
    padding-bottom: 2.5px;

    border-collapse: collapse;
    white-space: normal;
  }
  @media (max-width: 750px) {
    width: 100%;
    height: 40vh;
    margin-left: 3vw;
    margin-top: -10vh;
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
