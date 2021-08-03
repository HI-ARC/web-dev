import React, { FunctionComponent } from 'react';
import Template from 'components/Common/Template';
import Description from 'components/Common/Description';
import Post from 'components/Common/Post';
import MoveToDetail from 'components/Common/MoveToDetail';

const CommunicationPage: FunctionComponent = () => {
  return (
    <>
      <Template title='Communication'>
        <Description />
        <MoveToDetail/>
        <Post />    
      </Template>
    </>
  );
};

export default CommunicationPage;
