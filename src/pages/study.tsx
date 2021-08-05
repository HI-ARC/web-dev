import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import StudyTitle from 'components/Main/StudyTitle';
import BackButton from 'components/Common/BackButton';
import StudyList, { StudyType } from 'components/Main/StudyList';
import queryString, { ParsedQuery } from 'query-string';
import Template from 'components/Common/Template';

interface StudyPageProps {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: StudyType[];
    };
  };
}

const StudyPage: FunctionComponent =  ()=>{
 
  return (
    <>
      <Template title="Study">
        <StudyTitle />
        <StudyList />
        <BackButton showBelow={250} />
      </Template>
    </>
  );
};


export default StudyPage;

