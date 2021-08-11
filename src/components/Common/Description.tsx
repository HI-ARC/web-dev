import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 30px;
  line-height: 2;
  margin: 20px 120px;

  @media (max-width: 1070px) {
    font-size: 27px;
  }
  @media (max-width: 980px) {
    font-size: 25px;
  }
`;

const Hidden = styled.p`
  display: none;
  @media (max-width: 920px) {
    display: block;
  }
  @media (max-width: 710px) {
    font-size: 23px;
    width: 430px;
  }
`;

const Shown = styled.p`
  display: block;
  @media (max-width: 920px) {
    display: none;
  }
`;

const Description: FunctionComponent = function () {
  return (
    <DescriptionWrapper>
      <Hidden>
        <span>HI-ARC</span>의 전반적인 커뮤니케이션은<br /><span>Slack</span>을 통해 이루어집니다.<br />
        알고리즘 문제뿐만 아니라<br />타 분야에 대한 질문까지<br />자유롭게 질문할 수 있습니다.<br/>
        또한 매 학기 개강총회와 종강총회를 통해<br />한 학기 활동들을 돌아보는 자리를 가집니다.
      </Hidden>
      <Shown>
        <span>HI-ARC</span>의 전반적인 커뮤니케이션은 <span>Slack</span>을 통해 이루어집니다.<br />
        BOJ와 Codeforces 등의 알고리즘 문제,<br />학교 생활이나 개발 등의 타 분야에 대한 질문까지<br />
        <span>HI-ARC Slack</span>의 질문 채널에서 자유롭게 질문할 수 있습니다.<br />
        또한 매 학기 개강총회와 종강총회를 진행하여<br />한 학기 동안의 활동들을 돌아보는 자리를 가집니다.
      </Shown>
    </DescriptionWrapper>
  );
};

export default Description;
