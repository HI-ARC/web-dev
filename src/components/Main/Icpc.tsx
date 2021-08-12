import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IcpcWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  padding: 60px 9vw 0 9vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
`;

const IcpcBox = styled.div`
  @media (min-width: 1530px) {
    width: 1240px;
  }
`;

const Upper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

const Below = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
`;

const IcpcName = styled.div`
  margin-right: 5%;
  height: 80px;
  font-size: 36px;
  font-weight: 700;
  width: 180px;
  border-right: solid 4px #233660;

  @media (max-width: 600px) {
    width: 35%;
    font-size: 28px;
    height: 70px;
  }
`;

const IcpcIntro = styled.div`
  font-size: 2.1vw;
  line-height: 1.5;
  width: calc(100% - 200px);

  @media (min-width: 1000px) {
    font-size: 21px;
  }

  @media (max-width: 770px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    width: 65%;
  }
`;

const Button = styled.div`
  display: flex;
  height: 50px;
  flex-direction: row;
  border: solid #233660;
  border-radius: 80px;
  width: 170px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #233660;
`;

const Hidden = styled.p`
  display: none;
  @media (max-width: 630px) {
    display: block;
  }
`;

const Shown = styled.p`
  display: block;
  @media (max-width: 630px) {
    display: none;
  }
`;

const Icpc: FunctionComponent = () => {
  return (
    <IcpcWrapper>
      <IcpcBox>
        <Upper>
          <IcpcName>ICPC Sinchon</IcpcName>
          <IcpcIntro>
            <p>
              HI-ARC는 연세대, 이화여대, 서강대, 숙명여대와 함께 운영하는 동아리
              연합 ICPC Sinchon 소속입니다.
            </p>
            <Hidden>다양한 정보와 지식을 함께 교류해 나가고 있습니다.</Hidden>
            <Shown>
              매번 방학 기간을 이용해 연합 스터디와 합동 캠프, 프로그래밍 대회
              등을 진행하고 있습니다.
            </Shown>
            <Shown>
              이외에도 Slack 등을 통하여 다양한 정보와 지식을 함께 교류해 나가고
              있습니다.
            </Shown>
          </IcpcIntro>
        </Upper>
        <Below>
          <Button
            onClick={() => window.open('https://icpc-sinchon.io/')}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ width: '100px' }}>ICPC 홈페이지</div>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Below>
      </IcpcBox>
    </IcpcWrapper>
  );
};

export default Icpc;
