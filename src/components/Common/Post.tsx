import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostProps {}

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 120px;
`;

const Post: FunctionComponent<PostProps> = function () {
  return <PostWrapper></PostWrapper>;
};

export default Post;
