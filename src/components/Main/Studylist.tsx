import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

export interface StudyListProps {
  selectedStudy: string;
  StudyList: {
    [key: string]: number;
  };
}

const StudyListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  padding-left: 50px;
`;
const StudyListItem = styled.div`
  margin-right: 20px;
  border: 2px solid #073763;
  width: 150px;
  height: 50px;
  font-weight: bolder;
  font-size: 20px;
  text-align: center;
  background-color: #ffffff;
  margin: 0px 50px;
  line-height: 50px;
`;

const StudyList: FunctionComponent<StudyListProps> = function ({
  selectedStudy,
  StudyList,
}) {
  return (
    <StudyListWrapper>
      {Object.entries(StudyList).map(([name]) => (
        <StudyListItem>{name}</StudyListItem>
      ))}
    </StudyListWrapper>
  );
};

export default StudyList;
