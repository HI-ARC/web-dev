import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface RecordProps {}


const ContestWrapper = styled.div`
  width: 16rem;
  min-height: 11rem;
  color: black;
  @media (max-width: 750px) {
    width: 26rem;
    min-height: 2rem;
    margin-left: 1rem;
  }
  @media (max-width: 375px) {
    width: 16rem;
    min-height: 2rem;
    margin-left: 0rem;
  }
`;


const TitleWrapper = styled.div`
  width: 12rem;
  min-height: 2rem;
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  @media (max-width: 750px) {
    width: 18rem;
    min-height: 1rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
  }
  @media (max-width: 375px) {
    width: 14rem;
    min-height: 1rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
  }

`;

const Title = styled.div`
  width: 12rem;
  min-height: 2rem;
  display: flex;
  font-size: 27px;
  font-weight: 600;
  margin-left: 1.25rem;
  color: #233660;
  @media (max-width: 750px) {
    width: 25rem;
    margin-left: 0rem;
    font-size: 24px;
    min-height:1rem;
  }
  @media (max-width: 375px) {
    width: 14rem;
    margin-left: 0rem;
    font-size: 20px;
    min-height:1rem;
  }
`;

const LinkWrapper = styled.div`
  width: 12rem;
  height: 2.5rem;
  margin-left: 1rem; 
  text-align: center;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  @media (max-width: 750px) {
    display: none;
  }
`;

const ProblemWrapper = styled.div`
  width: 4rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  @media (max-width: 750px) {
    height: 3vh;
    margin-left:4vw;
  }
`;

const Problem = styled.div`
  font-size: 21px;
  padding-top: 0.5rem;
  color: gray;
  :hover {
    color: black;
  }
`;

const ScoreboardWrapper = styled.div`
  width: 7rem;
  height: 2.5rem;
  @media (max-width: 750px) {
    height: 3vh;
    margin-left:4vw;
  }
`;

const Scoreboard = styled.div`
  font-size: 22px;
  padding-top: 0.5rem;
  color: gray;
  :hover {
    color: black;
  }
`;


const RecordContent: FunctionComponent<RecordProps> = function ({
  title,
  problem,
  scoreboard,
}) 
{
  return (
    <ContestWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <LinkWrapper>
        <ProblemWrapper>
          <Problem>
            <a href={problem} target="_blank">
              문제
            </a>
          </Problem>
        </ProblemWrapper>
        <ScoreboardWrapper>
          <Scoreboard>
            <a href={scoreboard} target="_blank">
              스코어보드
            </a>
          </Scoreboard>
        </ScoreboardWrapper>
      </LinkWrapper>
    </ContestWrapper>
  );
};

export default RecordContent;
