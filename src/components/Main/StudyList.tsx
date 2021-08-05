import React, { FunctionComponent, useMemo, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import studyImage from '../../../contents/study/test.jpg';




const StudyListWrapper = styled.div`
 width:1000px;
 display:flex;
  }
`;

const StudyListItem = styled.button`
 width:250px;
 height:50px;
 margin: 20px;
 border:2px solid #233660;
 text-align: center;
 line-height:50px;
 font-weight:bold;
 font-size: 24px;
 cursor: pointer;
 background-color:white;
 color: ${({ active }) => (active ? 'white' : 'black')};
 background-color:${({ active }) => (active ? '#233660' : 'white')};
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

function Study({ study }) {
  return (
    <StudyContainer>
      <StudyDataContainer>
        <Summary>{study.summary}</Summary>
        <Description>{study.description}</Description>
      </StudyDataContainer>
      <StudyImage src={study.studyimage} />
    </StudyContainer>
  );
}

const StudyList: FunctionComponent = () => {
  const studies = [
    {
      id: 1,
      title: '기초프로그래밍',
      summary: '알고리즘 입문자를 위한 기초 프로그래밍 스터디',
      description: '기초 스터디 내용입니다.',
      studyimage: studyImage
    },
    {
      id: 2,
      title: '초급알고리즘',
      summary: '초급 스터디 요약입니다.',
      description: '초급 스터디 내용입니다.',
      studyimage: studyImage
    },
    {
      id: 3,
      title: '중급 프로그래밍',
      summary: '중급 스터디 요약입니다.',
      description: '중급 스터디 내용입니다.',
      studyimage: studyImage
    },
    {
      id: 4,
      title: '고급 프로그래밍',
      summary: '고급 스터디 요약입니다.',
      description: '고급 스터디 내용입니다.',
      studyimage: studyImage
    }
  ];

  const subStudies = [
    {
      id: 1,
      title: '모각코',
      summary: '모각코 요약',
      description: '모각코 내용',
      studyimage: studyImage
    },
    {
      id: 2,
      title: '자율스터디',
      summary: '자율스터디 요약',
      description: '자율 스터디 내용입니다.',
      studyimage: studyImage
    }
    
  ];
  const [number, setNumber] = useState(0);
  const firstStudy = () => {
    setNumber(0);
  }
  const secondStudy = () => {
    setNumber(1);
  }

  const thirdStudy = () => {
    setNumber(2);
  }
  const fourthStudy = () => {
    setNumber(3);
  }
  const [subnumber, setSubNumber] = useState(0);
  const firstSubStudy = () => {
    setSubNumber(0);
  }
  const secondSubStudy = () => {
    setSubNumber(1);
  }

 


  return (

    <StudyWrapper>
      <StudyListWrapper>
      <StudyListItem onClick={firstStudy}>기초프로그래밍</StudyListItem>
      <StudyListItem onClick={secondStudy}>초급 알고리즘</StudyListItem>
      <StudyListItem onClick={thirdStudy}>중급 알고리즘</StudyListItem>
      <StudyListItem onClick={fourthStudy}>고급 알고리즘</StudyListItem>
      </StudyListWrapper>
      <Study study={studies[number]}/>

      <StudyListWrapper>
      <StudyListItem onClick={firstSubStudy}>모각코</StudyListItem>
      <StudyListItem onClick={secondSubStudy}>자율스터디</StudyListItem>
      </StudyListWrapper>
      <Study study={subStudies[subnumber]}/>
     
     
     
    </StudyWrapper>
  );
};

export default StudyList;
