import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import { graphql } from 'gatsby';
import Header from 'components/Common/Header';
import Banner from 'components/Main/Banner';
import Footer from 'components/Common/Footer';
import Contents from 'components/Main/Contents';
import ActivityCard, { ActivityType } from 'components/Main/ActivityCard';
import Icpc from 'components/Main/Icpc';
import Scroll from 'components/Common/Scroll';

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
      <ActivityCard activities={edges} />
      <Icpc />
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
          }
        }
      }
    }
  }
`;
