import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Header from 'components/Common/Header';

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
      <div>수상 기록</div>
      <Link to="/">To Main</Link>
    </>
  );
};

export default InfoPage;
