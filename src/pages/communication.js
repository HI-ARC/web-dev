/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import GlobalStyle from 'components/Common/GlobalStyle';
import Description from 'components/Common/Description';
import MoveToDetail from 'components/Common/MoveToDetail';
//import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import PageTitle from 'components/Common/PageTitle';
import PostList from 'components/Common/PostList';
import { graphql } from 'gatsby';

import "../../src/styles.css";

const anchors = ["firstPage", "secondPage", "thirdPage"];
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
    //scrollingSpeed={700}
    pluginWrapper={pluginWrapper}
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    //sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <GlobalStyle />        
          <div className="section">
            <Header />
            <PageTitle title='Communication' />
            <Description />
            <MoveToDetail onClick={() => fullpageApi.moveSectionDown()}/>  
          </div>
          <div className="section">       
            <PostList posts={edges} />
            <Footer/>
          </div>
        </div>
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