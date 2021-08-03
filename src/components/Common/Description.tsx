import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: pre-wrap;
  color: black;
  font-size: 30px;
  line-height: 2;
  text-align: center;
  margin: 20px 120px;

  @media (max-width: 600px) {
    font-size: 20px;
    width: 320px;
  }
  @media (min-width: 1300px) {
    margin-left: 310px;
  }
`;

const Description: FunctionComponent = function () {
  const aboutText =
    'HI-ARC의 전반적인 커뮤니케이션은 Slack을 통해 이루어집니다.\n BOJ와 Codeforces 등의\n 알고리즘 문제, 학교 생활이나 개발 등의 타 분야에 대한 질문까지\n HI-ARC Slack의 질문 채널에서\n 자유롭게 질문할 수 있습니다.\n 또한 매 학기 개강총회와 종강총회를 진행하여 한 학기 동안의 활동들을\n 돌아보는 자리를 가집니다.';
  return (
    <DescriptionWrapper>
      {aboutText}
    </DescriptionWrapper>
  );
};

export default Description;
