import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const StudyTitleWrapper = styled.div`
  width: 120px;
  height: 120px;
  color: #073763;
  font-weight: bolder;
  font-size: 40px;
  margin: 100px 50px 50px 100px;
`;

const StudySubTitleWrapper = styled.div`
  width: 500px;
  height: 120px;
  color: #010101;
  font-weight: bolder;
  font-size: 40px;
  overflow: visible;
`;

const StudyTitle: FunctionComponent<ContentsProps> = function ({ studytitle }) {
  return (
    <StudyTitleWrapper>
      {studytitle}
      <StudySubTitleWrapper>
        <p>HI-ARC의 알고리즘 로드맵</p>
      </StudySubTitleWrapper>
    </StudyTitleWrapper>
  );
};

export default StudyTitle;
