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
 width:80%;
 display:flex;
 place-items: center;
 
 //background-color:yellow;
  }
  
`;

const StudyItem = styled.button`
width:250px;
 height:50px;
 margin: 20px;
 border:2px solid #233660;
 text-align: center;
 line-height:50px;
 font-weight:bold;
 font-size: 24px;
 font-weight:600;
 :hover{
   color:white;
   background-color:#233660;
   
 }
 color:${({ active }) => (active ? 'white' : 'black')};
 background-color:${({ active }) => (active ? '#233660' : 'white')};
 cursor: pointer;
 @media (max-width: 1200px) {
  font-size: 22px;
}
@media (max-width: 1000px) {
  font-size: 18px;
}
@media (max-width: 770px) {
  font-size: 16px;
}
@media (max-width: 770px) {
  width:50px;
 height:50px;
 border-radius: 16px;
 background-color:white;
 font-weight:bold;
 :hover{
  background-color:#233660;
  color:white;
}
color:${({ active }) => (active ? 'white' : 'black')};
 background-color:${({ active }) => (active ? '#233660' : 'white')};
}
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
 font-weight:600;
 :hover{
   color:white;
   background-color:#233660;
   
 }
 color:${({ active }) => (active ? 'white' : 'black')};
 background-color:${({ active }) => (active ? '#233660' : 'white')};
 cursor: pointer;

@media (max-width: 770px) {
  width:100px;
 height:50px;
 border-radius: 16px;
 background-color:white;
 font-weight:bold;
 :hover{
  background-color:#233660;
  color:white;
}
color:${({ active }) => (active ? 'white' : 'black')};
 background-color:${({ active }) => (active ? '#233660' : 'white')};
}
  }
`;

const StudyLine = styled.div`
  width: 80%;
  height:1px;
  border: 2px solid #233660;
  margin-bottom:60px;
  
`;

const StudyCategory = styled.div`
  width:80%;
  height:30px;
  font-size:28px;
  color:#233660;
  font-weight:bold;
  margin:0 0 20px 40px;


`;


const StudyWrapper = styled.div`
  width: 100%;
  height:100%;
  margin-right: auto;
  margin-left: auto;
  display:flex;
  flex-direction: column;
 // background-color:red;
  place-items: center;
  }
`;

const StudyContainer = styled.div`
  width: 1000px;
  height: 400px;
  flex-direction: column;
  display: flex;
  color: black;
  //background-color:green;
`;
const StudyDataContainer = styled.div`
  width: 80%;
  height: 500px;
  display: flex;
  color: black;
 // background-color:blue; 
`;

const Summary = styled.div` 
  height: 25%;
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  padding-left: 20px;
  padding-top: 10px;
  @media (max-width: 1200px) {
    font-size: 26px;
  }
  @media (max-width: 1100px) {
    font-size: 22px;
  }
  
`;

const Description = styled.div`
  width: 100%;
  height: 60%;
  padding: 20px 25px 0 25px;
  line-height: 2;
  font-size: 25px;
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 1100px) {
    font-size: 18px;
  }
  
  
`;

const StudyImageContainer = styled.div`
width: 600px;
margin: auto auto auto 30px;
height: 400px%;
//background-color:red;
@media (max-width: 1000px) {
  display: none;
}
@media (max-width: 1200px) {
  width: 500px;
  height:240px;
}
`;
const StudyTitleLong = styled.div`
@media (max-width: 770px) {
  display: none;
}
`;
const StudyTitleShort = styled.div`
@media (min-width: 770px) {
  display: none;
}
`;


const StudyImage = styled(Img)`
width: 100%;
height: 100%;
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
      <StudyCategory>Algorithm</StudyCategory>
      <StudyListWrapper>
        
        <StudyItem onClick={setgicho} active={Study==="기초프로그래밍"}><StudyTitleLong>기초프로그래밍</StudyTitleLong><StudyTitleShort>기초</StudyTitleShort></StudyItem>
        <StudyItem onClick={setchogeup} active={Study==="초급알고리즘"}><StudyTitleLong>초급알고리즘</StudyTitleLong><StudyTitleShort>초급</StudyTitleShort></StudyItem>
        <StudyItem onClick={setjoonggeup} active={Study==="중급알고리즘"}><StudyTitleLong>중급알고리즘</StudyTitleLong><StudyTitleShort>중급</StudyTitleShort></StudyItem>
        <StudyItem onClick={setgogeup} active={Study==="고급알고리즘"}><StudyTitleLong>고급알고리즘</StudyTitleLong><StudyTitleShort>고급</StudyTitleShort></StudyItem>
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
      <StudyLine/>
      <StudyCategory>Other Study</StudyCategory>
      <StudyListWrapper>
        <SubStudyItem onClick={setMogakko} active={subStudy==="모각코"}>모각코</SubStudyItem>
        <SubStudyItem onClick={setfree} active={subStudy==="자율스터디"}><StudyTitleLong>자율스터디</StudyTitleLong><StudyTitleShort>자율</StudyTitleShort></SubStudyItem>
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