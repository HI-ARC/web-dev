import React, { FunctionComponent } from 'react';
import Template from 'components/Common/Template';
import Description from 'components/Common/Description';
import PostList, { PostType } from 'components/Common/PostList';
import MoveToDetail from 'components/Common/MoveToDetail';
import BackButton from 'components/Common/BackButton';
import { graphql } from 'gatsby';

interface CommunicationPageProps {
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
  };
}

const CommunicationPage: FunctionComponent<CommunicationPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <>
      <Template title='Communication'>
        <Description />
        <MoveToDetail/>
        <PostList posts={edges} />
        <BackButton showBelow={250} />
      </Template>
    </>
  );
};

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