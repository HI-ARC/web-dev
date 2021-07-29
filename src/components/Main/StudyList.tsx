import React, { FunctionComponent, useMemo } from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

export type StudyType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      categories: string;
      summary: string;
      description: string;
    };
  };
};

interface StudiesProps {
  selectedStudy: string;
  activities: StudyType[];
}
const StudyListWrapper = styled.div`
 width:1000px;
 display:flex;
  }
`;
const StudyListItem = styled.div`
 width:250px;
 height:50px;
 margin: 20px;
 border:2px solid #233660;
 text-align: center;
 line-height:50px;
 font-weight:bold;
 font-size: 24px;

 
  }
`;
const StudyItem = styled(Link)`
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;

const StudyWrapper = styled.div`
  width: 1000px;
  margin-top: 20px;
  display:flex;
  flex-direction: column;
  }
`;

const StudyContainer = styled.div`
  width: 1000px;
  height: 400px;
  flex-direction: column;
  display: flex;
  color: black;
`;

const Title = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 500;
  padding-left: 30px;
  padding-top: 10px;
`;

const Description = styled.div`
  width: 100%;
  height: 57%;
  padding: 20px 25px 0 25px;
  line-height: 2;
  font-size: 15px;
`;

const StudyList: FunctionComponent<StudiesProps> = function ({
  selectedStudy,
  studies,
}) {
  const studyListData = useMemo(() =>
    studies.filter(
      ({
        node: {
          frontmatter: { categories },
        },
      }: StudyType) => categories.includes('Studies'),
    ),
  );
  const studyData = useMemo(() =>
    studies.filter(
      ({
        node: {
          frontmatter: { title },
        },
      }: StudyType) => title.includes(selectedStudy),
    ),
  );

  return (
    <StudyWrapper>
      <StudyListWrapper>
        {studyListData.map(
          ({
            node: {
              frontmatter: { title },
            },
          }: StudyType) => (
            <StudyListItem>
              <StudyItem
                to={`/study/?select=${title}`}
                active={title === selectedStudy}
                key={title}
              >
                {title}
              </StudyItem>
            </StudyListItem>
          ),
        )}
      </StudyListWrapper>
      {studyData.map(
        ({
          node: {
            frontmatter: { title, description, summary },
          },
        }: StudyType) => (
          <StudyContainer>
            <Title>{summary}</Title>
            <Description>{description}</Description>
          </StudyContainer>
        ),
      )}
    </StudyWrapper>
  );
};

export default StudyList;
