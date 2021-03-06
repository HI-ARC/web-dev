/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from '@emotion/styled';
import ReactFullpage from '@fullpage/react-fullpage';
import GlobalStyle from 'components/Common/GlobalStyle';
import Description from 'components/Common/Description';
import MoveToDetail from 'components/Common/MoveToDetail';
import Header2 from 'components/Common/Header2';
import Footer from 'components/Common/Footer';
import PageTitle from 'components/Common/PageTitle';
import PostList from 'components/Common/PostList';
import MoveToTop from 'components/Common/MoveToTop';
import { graphql } from 'gatsby';

import '../../src/styles.css';

const FooterWrapper = styled.div`
  text-align: initial;
`;

const TopWrapper = styled.div`
  margin-right: 62px;
  text-align: end;
`;

const anchors = ['firstPage', 'secondPage', 'thirdPage'];
const pluginWrapper = () => {
  require('fullpage.js/vendors/scrolloverflow');
};

const CommunicationPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <ReactFullpage
    scrollOverflow={true}
    pluginWrapper={pluginWrapper}
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    onLeave={(origin, destination, direction) => {
      console.log('onLeave event', { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log('render prop change', state, fullpageApi); // eslint-disable-line no-console

      return (
        <>
          <GlobalStyle />
          <Header2 />
          <div className="section">
            <PageTitle title="Communication" />
            <Description />
            <MoveToDetail onClick={() => fullpageApi.moveSectionDown()} />
          </div>
          <div className="section">
            <PostList posts={edges} />
            <TopWrapper>
              <MoveToTop onClick={() => fullpageApi.moveSectionUp()} />
            </TopWrapper>
            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          </div>
        </>
      );
    }}
  />
);

export default CommunicationPage;

export const queryPostList = graphql`
  query queryPostList {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: "Communication" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            communicationimage {
              childImageSharp {
                fluid(
                  maxWidth: 3080
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
