import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import GlobalStyle from 'components/Common/GlobalStyle';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import StudyTitle from 'components/Main/StudyTitle';
import StudyList from 'components/Main/Studylist';
import Scroll from 'components/Common/scroll';
import BackButton from 'components/Common/BackButton';

const Study_LIST = {
  기초프로그래밍: 1,
  초급알고리즘: 2,
  중급알고리즘: 3,
  고급알고리즘: 4,
};
interface InfoPageProps {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
    file: {
      childImageSharp: {
        fluid: ProfileImageProps['profileImage'];
      };
    };
  };
}

const InfoPage: FunctionComponent<InfoPageProps> = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StudyTitle studytitle="Study" />
      <Scroll showBelow={250} />
      <BackButton />
      <Footer />
    </>
  );
};

export default InfoPage;
