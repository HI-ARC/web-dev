import React, { FunctionComponent, useMemo } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img, { FluidObject } from 'gatsby-image';

export type ActivityType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      categories: string;
      order: number;
      introduction: string;
      url: string;
      img: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
};

interface ActivitiesProps {
  activities: ActivityType[];
}

const CardWrapper = styled.div`
  width: 1200px;

  height: 500px;
  margin-bottom: 80px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gird-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;

  @media (max-width: 1300px) {
    width: 97vw;
    height: 1000px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    margin-bottom: 70px;
  }

  @media (max-width: 600px) {
    height: 780px;
    margin-bottom: 50px;
  }
`;

const Card = styled.div`
  width: 380px;
  height: 430px;
  border-radius: 33px;
  background-color: #233660;
  color: white;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.3);

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: row;
    height: 300px;
    width: 680px;
  }

  @media (max-width: 780px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    height: 230px;
  }
`;

const Thumbnail = styled(Img)`
  width: 380px;
  height: 50%;
  border: 1px solid #233660;
  border-radius: 33px 33px 0 0;

  @media (max-width: 1300px) {
    width: 45%;
    height: 100%;
    border-radius: 33px 0 0 33px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const CardContent = styled.div`
  width: 100%;

  @media (max-width: 1300px) {
    width: 55%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 500;
  padding-left: 30px;
  margin-top: 20px;

  @media (max-width: 1300px) {
    height: 25%;
  }

  @media (max-width: 600px) {
    height: 25%;
  }

  @media (max-width: 499px) {
    font-size: 5.2vw;
    font-weight: bold;
  }
`;

const Introduction = styled.div`
  width: 100%;
  height: 25%;
  padding: 20px 25px 0 25px;
  line-height: 2;
  font-size: 15px;

  @media (max-width: 1300px) {
    padding-top: 3px;
    height: 43%;
  }

  @media (max-width: 600px) {
    height: 38%;
  }

  @media (max-width: 499px) {
    font-size: 3.2vw;
    margin-bottom: 10px;
    padding-top: 2%;
  }
`;

const GoTo = styled.div`
  width: 100%;
  //height: 18%;
  font-size: 24px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: -5px;

  @media (max-width: 1300px) {
    height: 30%;
    padding-bottom: 0;
    margin-top: 0px;
    padding-right: 30px;
  }

  @media (max-width: 499px) {
    font-size: 20px;
  }
`;

const Circle = styled.div`
  width: 45px;
  height: 45px;
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

const ActivityCard3: FunctionComponent<ActivitiesProps> = function ({
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
            frontmatter: { title, introduction, url, img },
          },
        }: ActivityType) => (
          <Card>
            <Thumbnail fluid={img.childImageSharp.fluid} />
            <CardContent>
              <Title>{title}</Title>
              <Introduction>{introduction}</Introduction>
              <GoTo>
                <Link to={url}>
                  <Circle>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Circle>
                </Link>
              </GoTo>
            </CardContent>
          </Card>
        ),
      )}
    </CardWrapper>
  );
};

export default ActivityCard3;
