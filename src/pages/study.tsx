import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import GlobalStyle from 'components/Common/GlobalStyle';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import StudyTitle from 'components/Main/StudyTitle';

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
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
      <Link to="/">To Main</Link>
      <Footer />
    </>
  );
};

export default InfoPage;
