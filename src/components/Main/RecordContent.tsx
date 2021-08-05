import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface RecordProps {}

const ContestWrapper = styled.div`
  width: 200px;
  height: 100px;
  color: black;
  margin-bottom: 10px;
`;

const LinkWrapper = styled.div`
  margin-top: -10%;
  display: flex;
  flex-direction: row;
`;

const TitleWrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  font-size: 26px;
  font-weight: 475;
  padding-top: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Problem = styled.div`
  width: 100%;
  height: 30%;
  font-size: 21px;
  padding-top: 12px;
  margin-left: 20px;
  color: gray;
  :hover {
    color: black;
  }
`;

const Scoreboard = styled.div`
  width: 100%;
  height: 30%;
  font-size: 22px;
  padding-top: 12px;
  margin-left: -80px;
  color: gray;
  :hover {
    color: black;
  }
`;

const RecordContent: FunctionComponent<RecordProps> = function ({
  title,
  problem,
  scoreboard,
}) {
  return (
    <ContestWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <LinkWrapper>
        <Problem>
          <a href={problem} target="_blank">
            문제
          </a>
        </Problem>
        <Scoreboard>
          <a href={scoreboard} target="_blank">
            스코어보드
          </a>
        </Scoreboard>
      </LinkWrapper>
    </ContestWrapper>
  );
};

export default RecordContent;
