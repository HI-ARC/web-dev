import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface ContentsProps {
  name: string;
}

const ContentsWrapper = styled.div`
  max-width: 100%;
  height: 50px;
  margin-bottom: 2.5vw;
  position: relative;
  display: flex;
  align-items: center;
`;

const ContentsName = styled.div`
  position: absolute;
  font-size: 36px; //2.8vw
  margin-left: 8vw;
  font-weight: 700;

  @media (min-width: 1400px) {
    margin-left: calc(50% - 580px);
  }

  @media (max-width: 680px) {
    font-size: 32px;
  }
`;

const Contents: FunctionComponent<ContentsProps> = function ({ name }) {
  return (
    <ContentsWrapper>
      <ContentsName>{name}</ContentsName>
    </ContentsWrapper>
  );
};

export default Contents;
