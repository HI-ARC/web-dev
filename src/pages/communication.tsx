import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

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
      <div>친목 활동</div>
      <Link to="/">To Main</Link>
    </>
  );
};

export default InfoPage;
