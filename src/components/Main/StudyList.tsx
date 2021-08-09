import React, { FunctionComponent, useMemo, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import Img, { FluidObject } from 'gatsby-image';

export type StudyType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      categories: string;
      summary: string;
      description: string;
      studyimage: {
        childImageSharp: {
          fluid: FluidObject;
        };
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



const SubStudyItem = styled.button`
width:250px;
 height:50px;
 margin: 20px;
 border:2px solid #233660;
 text-align: center;
 line-height:50px;
 font-weight:bold;
 font-size: 24px;
 color:${({ active }) => (active ? 'white' : 'black')};
 background-color:${({ active }) => (active ? '#233660' : 'white')};
 cursor: pointer;
 font-weight: ${({ active }) => (active ? '600' : '400')};
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
  flex-direction: column;
  display: flex;
  color: black;
`;
const StudyDataContainer = styled.div`
  width: 1200px;
  height: 400px;
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

const StudyImageContainer = styled.div`
width: 200px;
height: 200px;
`;

const StudyImage = styled(Img)`
width: 100%;
height: 100%;
border-radius: 10px 10px 0 0;
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
        <SubStudyItem onClick={setgicho} active={Study==="기초프로그래밍"}>기초프로그래밍</SubStudyItem>
        <SubStudyItem onClick={setchogeup} active={Study==="초급알고리즘"}>초급알고리즘</SubStudyItem>
        <SubStudyItem onClick={setjoonggeup} active={Study==="중급알고리즘"}>중급알고리즘</SubStudyItem>
        <SubStudyItem onClick={setgogeup} active={Study==="고급알고리즘"}>고급알고리즘</SubStudyItem>
      </StudyListWrapper>
      {studyData.map(({ node: { id, frontmatter } }: StudyType) => (
        <StudyDataContainer>
          <StudyContainer>
            <Summary>{frontmatter.summary}</Summary>
            <Description>{frontmatter.description}</Description>
            </StudyContainer>
            <StudyImageContainer>
            <StudyImage fluid={frontmatter.studyimage.childImageSharp.fluid} />
            </StudyImageContainer>
          </StudyDataContainer>
        ),
      )}
      <StudyListWrapper>
        <SubStudyItem onClick={setMogakko} active={subStudy==="모각코"}>모각코</SubStudyItem>
        <SubStudyItem onClick={setfree} active={subStudy==="자율스터디"}>자율스터디</SubStudyItem>
      </StudyListWrapper>
      {subStudyData.map(({ node: { id, frontmatter } }: StudyType) => (
        <StudyDataContainer>
          <StudyContainer>
            <Summary>{frontmatter.summary}</Summary>
            <Description>{frontmatter.description}</Description>
            </StudyContainer>
            <StudyImageContainer>
            <StudyImage fluid={frontmatter.studyimage.childImageSharp.fluid} />
            </StudyImageContainer>
          
          </StudyDataContainer>
        ),
      )}
    </StudyWrapper>
  );
};

export default StudyList;