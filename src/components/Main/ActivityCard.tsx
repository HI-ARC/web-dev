import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ActivityType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      categories: string;
      order: number;
      introduction: string;
      url: string;
    };
  };
};

interface ActivitiesProps {
  activities: ActivityType[];
}

const CardWrapper = styled.div`
  max-width: 100%;
  margin-top: 20px;
  padding-left: 15vw;
  padding-right: 15vw;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    height: 230px;
    width: 500px;
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

  @media (max-width: 768px) {
    height: 33%;
  }
`;

const Introduction = styled.div`
  width: 100%;
  height: 57%;
  padding: 20px 25px 0 25px;
  line-height: 2;
  font-size: 15px;

  @media (max-width: 768px) {
    padding-top: 3px;
    height: 37%;
  }
`;

const GoTo = styled.div`
  width: 100%;
  height: 18%;
  font-size: 24px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media (max-width: 768px) {
    height: 30%;
    padding-bottom: 0;
  }
`;

const Circle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActivityCard: FunctionComponent<ActivitiesProps> = function ({
  activities,
}) {
  return (
    <CardWrapper>
      {activities.map(
        ({
          node: {
            frontmatter: { title, introduction, url },
          },
        }: ActivityType) => (
          <Card>
            <Title>{title}</Title>
            <Introduction>{introduction}</Introduction>
            <GoTo>
              <Link to={url}>
                <Circle>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Circle>
              </Link>
            </GoTo>
          </Card>
        ),
      )}
    </CardWrapper>
  );
};

export default ActivityCard;
