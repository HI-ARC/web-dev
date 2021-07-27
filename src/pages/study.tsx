import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import GlobalStyle from 'components/Common/GlobalStyle';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import StudyTitle from 'components/Main/StudyTitle';
import Scroll from 'components/Common/scroll';
import BackButton from 'components/Common/BackButton';
import StudyList from 'components/Main/StudyList';

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
      <GlobalStyle />
      <Header />
      <StudyTitle studytitle="Study" />
      <StudyList studies={edges} />
      <Scroll showBelow={250} />
      <BackButton />
      <Footer />
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
          }
        }
      }
    }
  }
`;
