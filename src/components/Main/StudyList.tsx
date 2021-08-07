import React, { FunctionComponent, useMemo, ReactNode } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { useState } from 'react';

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

const SubStudyItem = styled.button`
width:250px;
 height:50px;
 margin: 20px;
 border:2px solid #233660;
 text-align: center;
 line-height:50px;
 font-weight:bold;
 font-size: 24px;
 background-color:white;
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
  flex-direction: column;
  display: flex;
  color: black;
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
  studies,
  
}) {
 
 
  const [Study,setStudy]= useState("기초프로그래밍");
  const setgicho = () => {
    setStudy("기초프로그래밍");
  }
  const setchogeup = () => {
    setStudy("초급알고리즘");
  }
  const setjoonggeup = () => {
    setStudy("중급알고리즘");
  }
  const setgogeup = () => {
    setStudy("고급알고리즘");
  }
  const studyData = useMemo(() =>
  studies.filter(
    ({
      node: {
        frontmatter: { title },
      },
    }: StudyType) => title.includes(Study),
  ), [Study]
);


  const [subStudy,setSubStudy]= useState("모각코");
  const setMogakko = () => {
    setSubStudy("모각코");
  }
  const setfree = () => {
    setSubStudy("자율스터디");
  }
  const subStudyData = useMemo(() =>
    studies.filter(
      ({
        node: {
          frontmatter: { title },
        },
      }: StudyType) => title.includes(subStudy),
    ), [subStudy]
  );

  

  return (
    <StudyWrapper>
      <StudyListWrapper>
        <SubStudyItem onClick={setgicho}>기초프로그래밍</SubStudyItem>
        <SubStudyItem onClick={setchogeup}>초급알고리즘</SubStudyItem>
        <SubStudyItem onClick={setjoonggeup}>중급알고리즘</SubStudyItem>
        <SubStudyItem onClick={setgogeup}>고급알고리즘</SubStudyItem>
      </StudyListWrapper>
      {studyData.map(
        ({
          node: {
            frontmatter: {
              description,
              summary,
              studyimage: { publicURL }
            },
          },
        }: StudyType) => (
          <StudyContainer>
            <Summary>{summary}</Summary>
            <Description>{description}</Description>
            <StudyImage src={publicURL} />
          </StudyContainer>
        ),
      )}
      <StudyListWrapper>
        <SubStudyItem onClick={setMogakko}>모각코</SubStudyItem>
        <SubStudyItem onClick={setfree}>자율스터디</SubStudyItem>
      </StudyListWrapper>
      {subStudyData.map(
        ({
          node: {
            frontmatter: {
              description,
              summary,
              studyimage: { publicURL }
            },
          },
        }: StudyType) => (
          <StudyContainer>
            <Summary>{summary}</Summary>
            <Description>{description}</Description>
            <StudyImage src={publicURL} />
          </StudyContainer>
        ),
      )}
    </StudyWrapper>
  );
};

export default StudyList;