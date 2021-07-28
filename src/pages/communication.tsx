import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Template from 'components/Common/Template';
import Description from 'components/Common/Description';
import Post from 'components/Common/Post';

const CommunicationPage: FunctionComponent = () => {
  return (
    <>
      <Template title='Communication'>
        <Description />
        <Post />
      </Template>
    </>
  );
};

export default CommunicationPage;
