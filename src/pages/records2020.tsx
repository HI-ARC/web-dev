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

const Update = styled.text`
  margin-top: 2vh;
  font-size: 20px;
  color: gray;
  width: 80%;
  height: 30%;
  margin-left: 2vw;
  display: grid;
  @media (max-width: 750px) {
   display:none;
  }
`;

const RecordPage: FunctionComponent = () => {

  return (
    <>
      <Template title="Records">
        <RecordList></RecordList>
        
        {/*UCPC 2020 ??????*/}
        <RecordWrapper>
          <RecordContent
            title={'UCPC 2020 ??????'}
            problem={'https://www.acmicpc.net/category/detail/2270'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/521'}
          ></RecordContent>
          <TableWrapper>
            <tr>
            <CreateHeader></CreateHeader>
            </tr>
            <TableTemplate
              prize="28"
              team="?????? "
              member="?????????, ?????????, ?????????"
            ></TableTemplate>
            
          </TableWrapper>
          
        </RecordWrapper>
        <TableDivider></TableDivider>
        
        {/*UCPC 2020 ??????*/}
        <RecordWrapper>
          <RecordContent
            title={'UCPC 2020 ??????'}
            problem={'https://www.acmicpc.net/category/detail/2272'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/524'}
          ></RecordContent>
          <TableWrapper>
            <tr>
            <CreateHeader></CreateHeader>
            </tr>

            <TableTemplate
              prize="34"
              team="?????? "
              member="?????????, ?????????, ?????????"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        <TableDivider></TableDivider>
        
        {/*SUAPC 2020 Summer - Div. 1*/}
        <RecordWrapper>
          <RecordContent
            title={'SUAPC 2020 Summer - Div. 1'}
            problem={'https://www.acmicpc.net/category/detail/2274'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/519'}
          ></RecordContent>
          <TableWrapper>
            <tr>
            <CreateHeader></CreateHeader>
            </tr>
            <TableTemplate
              prize="8"
              team="????????? ????????? "
              member="?????????, ?????????, ?????????"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        <TableDivider></TableDivider>
        
        {/*SUAPC 2020 Summer - Div. 2*/}
        <RecordWrapper>
          <RecordContent
            title={'SUAPC 2020 Summer - Div. 2'}
            problem={'https://www.acmicpc.net/category/detail/2275'}
            scoreboard={'https://www.acmicpc.net/contest/spotboard/518'}
          ></RecordContent>
          <TableWrapper>
            <tr>
            <CreateHeader></CreateHeader>
            </tr>

            <TableTemplate
              prize="4"
              team="??????????????? ??? ??? ???"
              member="?????????, ?????????, ?????????"
            ></TableTemplate>

            <TableTemplate
              prize="6 "
              team="?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? "
              member= "?????????, ?????????, ??????"
            ></TableTemplate>

            <TableTemplate
              prize="8"
              team="team protocol "
              member=" ?????????, ?????????, ?????????"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        <TableDivider></TableDivider>
        
        {/*ICPC 2020 ??????*/}
        <RecordWrapper>
          <RecordContent
            title={'ACM-ICPC Seoul Regional 2020 - ??????'}
            problem={'http://static.icpckorea.net/20201010/problems.pdf'}
            scoreboard={'http://icpckorea.org/2020/preliminary/scoreboard/dbda78f0e4/'}
          ></RecordContent>
          <TableWrapper>
            <tr>
            <CreateHeader></CreateHeader>
            </tr>
            <TableTemplate
              prize="37"
              team="Gr-Yee-n55"
              member="?????????, ?????????, ?????????"
            ></TableTemplate>
            <TableTemplate
              prize="131"
              team="Porco_Rosso"
              member="?????????, ?????????, ?????????"
            ></TableTemplate>
            <TableTemplate
              prize="171"
              team="team protocol"
              member="?????????, ?????????, ?????????"
            ></TableTemplate>      
            <TableTemplate
              prize="267"
              team="Corona_SiroSiro"
              member="?????????, ?????????, ?????????"
            ></TableTemplate>
           <TableTemplate
              prize="329"
              team="SODA"
              member="?????????, ?????????, ?????????"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        <TableDivider></TableDivider>
        
        {/*ICPC 2020 ??????*/}
        <RecordWrapper>
          <RecordContent
            title={'ACM-ICPC Seoul Regional 2020 - ??????'}
            problem={'http://static.icpckorea.net/2020/problemset.pdf'}
            scoreboard={'http://static.icpckorea.net/2020/scoreboard_terpin/'}
          ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>
            <TableTemplate
              prize="10"
              team="Gr-Yee-n55 "
              member="?????????, ?????????, ?????????"
            ></TableTemplate>
          </TableWrapper>
        </RecordWrapper>
        <TableDivider></TableDivider>

        {/*SCPC 2020 ??????*/}
        <RecordWrapper>
          <RecordContent
            title={'SCPC 2020 ??????'}
            problem={'invalid'}
            scoreboard={'invalid'}

          ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>

            <TableTemplate
              prize="????????????"
              team="??????"
              member="?????????"
            ></TableTemplate>
            <Update>
              <p>* ?????? ??? ??????????????? ?????? ???????????? ???????????????.</p>
            </Update>
          </TableWrapper>
        </RecordWrapper>
        <TableDivider></TableDivider>

        {/*SCPC 2020 ??????*/}
        <RecordWrapper>
          <RecordContent
            title={'SCPC 2020 ??????'}
          ></RecordContent>
          <TableWrapper>
            <CreateHeader></CreateHeader>
            <TableTemplate
              prize="4"
              team="??????"
              member="?????????"
            ></TableTemplate>
            <Update>
              <p>* ?????? ??? ??????????????? ?????? ???????????? ???????????????.</p>
            </Update>
          </TableWrapper>
        </RecordWrapper>

        <br/><br/>
      </Template>
    </>
  );
};

export default RecordPage;
