import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IcpcWrapper = styled.div`
  max-width: 100%;
  height: 300px;
  margin-top: 30px;
  padding-top: 60px;
  padding-left: 8vw;
  padding-right: 13vw;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-right: 20px;
  }
`;

const Upper = styled.div`
  display: flex;
  flex-direction: row;
  height: 120px;
`;

const Below = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
`;

const IcpcName = styled.div`
  font-size: 36px;
  font-weight: 700;
  width: 160px;
  height: 120px;
`;

const IcpcLine = styled.div`
  height: 85px;
  width: 5px;
  background-color: #233660;
  margin-right: 50px;
`;

const IcpcIntro = styled.div`
  font-size: 19px;
  width: 770px;
  height: 120px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 400px;
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

const Icpc: FunctionComponent = () => {
  return (
    <IcpcWrapper>
      <Upper>
        <IcpcName>ICPC Sinchon</IcpcName>
        <IcpcLine></IcpcLine>
        <IcpcIntro>
          <p>
            HI-ARC는 연세대, 이화여대, 서강대, 숙명여대와 함께 운영하는 동아리
            연합 ICPC Sinchon 소속입니다.
          </p>
          <p>
            매번 방학 기간을 이용해 연합 스터디와 합동 캠프, 프로그래밍 대회
            등을 진행하고 있습니다.
          </p>
          <p>
            이외에도 Slack 등을 통하여 다양한 정보와 지식을 함께 교류해 나가고
            있습니다.
          </p>
        </IcpcIntro>
      </Upper>
      <Below>
        <Button>
          <div style={{ width: '100px' }}>ICPC 홈페이지</div>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Below>
    </IcpcWrapper>
  );
};

export default Icpc;
