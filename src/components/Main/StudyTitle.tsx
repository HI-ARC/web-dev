import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const StudySubTitleWrapper = styled.div`
  width: 600px;
  color: #010101;
  font-weight: bolder;
  font-size: 28px;
  overflow: visible;
  padding-bottom: 20px;
  margin: 20px 0 20px 75px;
  @media (max-width: 650px) {
    font-size: 20px;
    display:none;
  }
`;

const StudyTitle: FunctionComponent = function () {
  return (
    <StudySubTitleWrapper>
      <p>HI-ARC는 다양한 스터디를 지원하고 있습니다</p>
    </StudySubTitleWrapper>
  );
};

export default StudyTitle;
