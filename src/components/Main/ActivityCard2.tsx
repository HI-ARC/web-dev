import React, { FunctionComponent, useMemo } from 'react';
import { Link } from 'gatsby';
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
  //width: 990px;
  height: 520px;
  margin-bottom: 80px;
  //margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  gird-template-rows: 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;

  @media (max-width: 1000px) {
    width: 97vw;
    height: 1000px;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    margin-bottom: 60px;
  }

  @media (max-width: 499px) {
    height: 1000px;
  }
`;

const Card = styled.div`
  width: 400px;
  height: 250px;
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

  @media (max-width: 499px) {
    font-size: 5.2vw;
    font-weight: bold;
  }
`;

const Introduction = styled.div`
  width: 100%;
  height: 50%;
  padding: 20px 25px 0 25px;
  line-height: 2;
  font-size: 15px;

  @media (max-width: 1000px) {
    padding-top: 3px;
    height: 37%;
  }

  @media (max-width: 499px) {
    font-size: 3.2vw;
    margin-bottom: 10px;
    padding-top: 2%;
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

  @media (max-width: 1000px) {
    height: 30%;
    padding-bottom: 0;
  }

  @media (max-width: 499px) {
    font-size: 20px;
  }
`;

const Circle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 0.13em solid white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 0.3s;
    background-color: white;
    color: #233660;
  }

  @media (max-width: 499px) {
    width: 38px;
    height: 38px;
  }
`;

const ActivityCard2: FunctionComponent<ActivitiesProps> = function ({
  activities,
}) {
  const activityData = useMemo(
    () =>
      activities.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: ActivityType) => categories.includes('Activities'),
      ),
    [],
  );
  return (
    <CardWrapper>
      {activityData.map(
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

export default ActivityCard2;
