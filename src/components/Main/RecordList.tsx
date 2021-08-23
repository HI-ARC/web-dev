import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

interface ButtonProps {}

const DescriptionWrapper=styled.div`
  width: 80%;
  height: 24vh;
  display: grid;
  place-items: center;
  margin-left: 10vw;
  margin-top:2vh;
  @media (max-width: 750px) {
    height:14vh;
  }
`;

const RecordsDescription=styled.div`
  width:76vw;
  height:20vh;
  font-size:22px;
  letter-spacing:1.5px;
  line-height:150%;
  @media (max-width: 1030px) {
    font-size: 18px;
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

const RecordsDescriptionShort=styled.div`
  width:76vw;
  height:12vh;
  margin-left: 4vw;
  font-size:20px;
  letter-spacing:1.5px;
  line-height:150%;
  @media (min-width: 750px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 1vh 1.25vw;
  font-size: 32px;
  font-color: black;
  border: none;
  border-radius: 60px;
  background-color: white;
  :hover {
    background-color: #233660;
    color: #ffffff;
  }
  @media (max-width: 750px) {
    font-size: 24px;
    padding: 0.75vh 1vw;
  }
`;

const RecordListWrapper = styled.div`
  width: 80vw;
  height: 12vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  margin-left: 8.4vw;
  margin-top: 2vh;
  border-bottom: 3px solid #233660;
  @media (max-width: 750px) {
    width: 70vw;
    margin-left: 12vw;
  }
`;


const RecordList: FunctionComponent = function () {
  return (
    <>
      <DescriptionWrapper>
        <RecordsDescription>
          HI-ARC는 2017년 창립 이후 매년 교내 프로그래밍 경진대회 및 UCPC와 같은 교외 프로그래밍 대회에도 꾸준히 참가하여 우수한 성적을 거두고 있습니다.<br/>
          또한 2020년부터 신촌지역 4개 학교와 연합을 맺어 자체적으로도 프로그래밍 대회를 진행하고 있습니다.</RecordsDescription>
          <RecordsDescriptionShort>
            HI-ARC는 매년 교내외 프로그래밍 대회에 참가하여 우수한 성적을 거두고 있습니다.
          </RecordsDescriptionShort>
      </DescriptionWrapper>
      <br/>
      <RecordListWrapper>    
        <Button>
          <Link to="/records2021">2021</Link>
        </Button>
        <Button>
          <Link to="/records2020">2020</Link>
        </Button>
        <Button>
          <Link to="/records2019">2019</Link>
        </Button>
        <Button>
          <Link to="/records2018">2018</Link>
        </Button>
        <Button>
          <Link to="/records2017">2017</Link>
        </Button>
      </RecordListWrapper>
    </>
  );
};

export default RecordList;
