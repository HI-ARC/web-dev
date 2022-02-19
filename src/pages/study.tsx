import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import StudyTitle from 'components/Main/StudyTitle';
import StudyList, { StudyType } from 'components/Main/StudyList';
import Template from 'components/Common/Template';

interface StudyPageProps {
  data: {
    allMarkdownRemark: {
      edges: StudyType[];
    };
  };
}

const StudyPage: FunctionComponent<StudyPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <>
      <Template title="Study">
        <StudyTitle />
        <StudyList studies={edges} />
      </Template>
    </>
  );
};

export default StudyPage;

export const studyDataQuery = graphql`
  query queryStudies {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          frontmatter {
            title
            categories
            summary
            description
            studyimage {
              childImageSharp {
                fluid(
                  maxWidth: 768
                  maxHeight: 768
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
