import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import StudyTitle from 'components/Main/StudyTitle';
import BackButton from 'components/Common/BackButton';
import StudyList from 'components/Main/StudyList';
import queryString, { ParsedQuery } from 'query-string';
import Template from 'components/Common/Template';

interface StudyPageProps {
  data: {
    allMarkdownRemark: {
      edges: StudyType[];
    };
  };
}

const StudyPage: FunctionComponent<StudyPageProps> = function ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedStudy: string =
    typeof parsed.select !== 'string' || !parsed.select
      ? '기초프로그래밍'
      : parsed.select;
  return (
    <>
      <Template title="Study">
        <StudyTitle />
        <StudyList selectedStudy={selectedStudy} studies={edges} />
        <BackButton />
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
            studyimage
          }
        }
      }
    }
  }
`;
