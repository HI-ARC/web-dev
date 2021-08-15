import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const StudySubTitleWrapper = styled.div`
  width: 500px;
  height: 120px;
  color: #010101;
  font-weight: bolder;
  font-size: 40px;
  overflow: visible;
  margin-left: 75px;
`;

const StudyTitle: FunctionComponent = function () {
  return (
    <StudySubTitleWrapper>
      <p>HI-ARC의 스터디</p>
    </StudySubTitleWrapper>
  );
};

export default StudyTitle;
