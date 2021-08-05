import React, { FunctionComponent, useMemo, ReactNode } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import UserList from './testList';

export type StudyType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      categories: string;
      summary: string;
      description: string;
      studyimage: {
        publicURL: string;
      };
    };
  };
};

interface StudiesProps {
  selectedStudy: string;
  studies: StudyType[];
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

type StudyItemProps = {
  active: boolean;
};

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & StudyItemProps;

const StudyItem = styled(({ active, to, ...props }: GatsbyLinkProps) => (
  <Link to={to} {...props} />
))<StudyItemProps>`
  font-weight: ${({ active }) => (active ? '800' : '400')};

  cursor: pointer;
  color: ${({ active }) => (active ? 'white' : 'black')};
  background-color: ${({ active }) => (active ? '#233660' : 'white')};

  &:last-of-type {
    margin-right: 0;
  }
`;

const StudyWrapper = styled.div`
  width: 1000px;
  margin-left: 55px;
  display:flex;
  flex-direction: column;
  }
`;

const StudyContainer = styled.div`
  width: 1000px;
  height: 400px;
  display: flex;
  color: black;
`;
const StudyDataContainer = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  color: black;
  flex-direction: column;
`;

const Summary = styled.div`
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

const StudyImage = styled.img`
  height: 40px;
  width: 40px;
`;

const StudyList: FunctionComponent<StudiesProps> = function ({
  selectedStudy,
  studies,
}) {
  const studyListData = useMemo(
    () =>
      studies.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: StudyType) => categories.includes('Studies'),
      ),
    [],
  );
  const studyData = useMemo(
    () =>
      studies.filter(
        ({
          node: {
            frontmatter: { title },
          },
        }: StudyType) => title.includes(selectedStudy),
      ),
    [],
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
            <StudyItem
              to={`/study/?select=${title}`}
              active={title === selectedStudy}
              key={title}
            >
              {title}
            </StudyItem>
          ),
        )}
      </StudyListWrapper>
      {studyData.map(
        ({
          node: {
            frontmatter: {
              description,
              summary,
              studyimage: { publicURL },
            },
          },
        }: StudyType) => (
          <StudyContainer>
            <StudyDataContainer>
              <Summary>{summary}</Summary>
              <Description>{description}</Description>

              <StudyImage src={publicURL} />
            </StudyDataContainer>
          </StudyContainer>
        ),
      )}
      <UserList />
    </StudyWrapper>
  );
};

export default StudyList;
