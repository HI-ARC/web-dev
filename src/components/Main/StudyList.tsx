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
 width:90%;
 display:flex;
 place-items: center;
 margin:30px 0;

 
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
 border-radius:10px;
 background-color:white;
 :hover{
   color:white;
   background-color:#233660;
   
 }
 cursor: pointer;
 @media (max-width: 1200px) {
  font-size: 22px;
}
@media (max-width: 1000px) {
  font-size: 20px;
}
@media (max-width: 800px) {
  font-size: 16px;
}
@media (max-width: 770px) {
  font-size: 18px;
  margin-left:10px;
  width:60px;
 height:60px;
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







const StudyWrapper = styled.div`
  width: 100%;
  height:100%;
  display:flex;
  flex-direction: column;
  place-items: center;
  }
`;

const StudyContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  color: black;
`;
const StudyDataContainer = styled.div`
  width: 90%;
  height: 500px;
  display: flex;
  border: 3px solid #233660;
  color: black;
  margin: 40px 0;
  padding: 10px 20px;
  border-radius: 20px;
  
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
  @media (max-width: 770px) {
    font-size: 18px;
  }
  
  
`;

const StudyImageContainer = styled.div`
margin:auto;

@media (max-width: 1000px) {
  display: none;
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
width: 430px;
height: 350px;
display:grid;
@media (max-width: 1770px) {
  width: 370px;
height: 300px;
}
@media (max-width: 1400px) {
  width: 300px;
height: 270px;
}

`;

const StudyList: FunctionComponent<StudiesProps> = function ({
  studies,
  
}) {
 
 
  const [Study,setStudy]= useState("초급알고리즘");
 
  const studyData = useMemo(() =>
  studies.filter(
    ({
      node: {
        frontmatter: { categories },
      },
    }: StudyType) => categories.includes("Studies"),
  ), [Study]
);
const moveto1 = () => {
  window[`scrollTo`]({ top: 100, behavior: `smooth` });
};
const moveto2 = () => {
  window[`scrollTo`]({ top: 700, behavior: `smooth` });
};
const moveto3 = () => {
  window[`scrollTo`]({ top: 1200, behavior: `smooth` });
};
const moveto4 = () => {
  window[`scrollTo`]({ top: 1700, behavior: `smooth` });
};


 

  

  return (
    <StudyWrapper>
      <StudyListWrapper>
        <StudyItem onClick={moveto1} active={Study==="초급알고리즘"}><StudyTitleLong>초급알고리즘</StudyTitleLong><StudyTitleShort>초급</StudyTitleShort></StudyItem>
        <StudyItem onClick={moveto2}  active={Study==="중급알고리즘"}><StudyTitleLong>중급알고리즘</StudyTitleLong><StudyTitleShort>중급</StudyTitleShort></StudyItem>
        <StudyItem onClick={moveto3} active={Study==="대회준비반"}><StudyTitleLong>대회준비반</StudyTitleLong><StudyTitleShort>대회</StudyTitleShort></StudyItem>
        <StudyItem onClick={moveto4} active={Study==="모각코"}><StudyTitleLong>모각코</StudyTitleLong><StudyTitleShort>모각코</StudyTitleShort></StudyItem>
      </StudyListWrapper>
      {studyData.map(({ node: {  frontmatter } }: StudyType) => (
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