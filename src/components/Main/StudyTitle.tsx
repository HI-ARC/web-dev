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

const StudyTitle: FunctionComponent<ContentsProps> = function ({ studytitle }) {
  return (
    <StudySubTitleWrapper>
      <p>HI-ARC의 알고리즘 로드맵</p>
    </StudySubTitleWrapper>
  );
};

export default StudyTitle;