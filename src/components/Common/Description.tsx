import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //height: 25vh;
  color: black;
  font-size: 27px;
  line-height: 2;
  margin: 70px 120px 30px;
  
  @media (max-width: 980px) {
    font-size: 25px;
    margin: 75px 120px 40px;
  }
  @media (max-width: 920px) {
    margin: 50px 120px 20px;
  }
  @media (max-width: 710px) {
    margin: 70px 120px 30px;
  }
  @media (max-width: 450px) {
    margin: 90px 120px 40px;
  }
  @media (max-width: 400px) {
    margin: 80px 120px 40px;
  }
  @media (max-width: 380px) {
    margin: 85px 120px 50px;
  }
`;

const Hidden = styled.p`
  display: none;
  @media (max-width: 920px) {
    display: block;
  }
  @media (max-width: 710px) {
    font-size: 22px;
    width: 430px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
    width: 380px;
  }
  @media (max-width: 400px) {
    font-size: 18px;
    width: 350px;
  }
  @media (max-width: 380px) {
    font-size: 17px;
    width: 320px;
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
        <span>HI-ARC</span>의 전반적인 커뮤니케이션은<br /><span>Discord</span>를 통해 이루어집니다.<br />
        알고리즘 문제뿐만 아니라<br />타 분야에 대한 질문까지<br />자유롭게 질문할 수 있습니다.<br/>
        또한 매 학기 개강총회와 종강총회를 통해<br />한 학기 활동들을 돌아보는 자리를 가집니다.
      </Hidden>
      <Shown>
        <span>HI-ARC</span>의 전반적인 커뮤니케이션은 <span>Discord</span>를 통해 이루어집니다.<br />
        BOJ와 Codeforces 등의 알고리즘 문제,<br />학교 생활이나 개발 등의 타 분야에 대한 질문까지<br />
        <span>HI-ARC Discord</span>의 질문 채널에서 자유롭게 질문할 수 있습니다.<br />
        또한 매 학기 개강총회와 종강총회를 진행하여<br />한 학기 동안의 활동들을 돌아보는 자리를 가집니다.
      </Shown>
    </DescriptionWrapper>
  );
};

export default Description;
