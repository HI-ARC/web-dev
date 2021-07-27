import React, { FunctionComponent, useMemo } from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  activities: StudyType[];
}

const CardWrapper = styled.div`
  width: 990px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;

  @media (max-width: 1000px) {
    width: 97vw;
    height: 700px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

const Card = styled.div`
  width: 280px;
  height: 400px;
  border-radius: 33px;
  background-color: #233660;
  color: white;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.3);

  @media (max-width: 1000px) {
    height: 230px;
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 85%;
  }
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

  @media (max-width: 1000px) {
    height: 33%;
  }
`;

const Introduction = styled.div`
  width: 100%;
  height: 57%;
  padding: 20px 25px 0 25px;
  line-height: 2;
  font-size: 15px;

  @media (max-width: 1000px) {
    padding-top: 3px;
    height: 37%;
  }
`;

const StudyList: FunctionComponent<StuduesProps> = function ({ studies }) {
  const studyData = useMemo(() =>
    studies.filter(
      ({
        node: {
          frontmatter: { categories },
        },
      }: StudyType) => categories.includes('Studies'),
    ),
  );
  return (
    <CardWrapper>
      {studyData.map(
        ({
          node: {
            frontmatter: { title, description, summary },
          },
        }: StudyType) => (
          <Card>
            <Title>{title}</Title>
            <Introduction>{description}</Introduction>
          </Card>
        ),
      )}
    </CardWrapper>
  );
};

export default StudyList;
