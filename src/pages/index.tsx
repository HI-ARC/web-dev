import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import { graphql } from 'gatsby';
import Header from 'components/Common/Header';
import Banner from 'components/Main/Banner';
import Footer from 'components/Common/Footer';
import Contents from 'components/Main/Contents';
import ActivityCard3, { ActivityType } from 'components/Main/ActivityCard3';
import Scroll from 'components/Common/Scroll';
import Icpc2 from 'components/Main/Icpc2';

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: ActivityType[];
    };
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100%;
  height: 100%;
  position: relative;
`;

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Banner />
      <Scroll showBelow={250} />
      <Contents name="ACTIVITIES" />
      <ActivityCard3 activities={edges} />
      <Icpc2 />
      <Footer />
    </Container>
  );
};

export default IndexPage;

export const queryActivities = graphql`
  query queryActivities {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          frontmatter {
            title
            categories
            order
            introduction
            url
            img {
              childImageSharp {
                fluid(
                  maxWidth: 768
                  maxHeight: 300
                  fit: INSIDE
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
