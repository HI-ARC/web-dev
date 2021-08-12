import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';
import { FluidObject } from 'gatsby-image';

export type PostType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      communicationimage: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
};

interface PostListProps {
  posts: PostType[];
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
  width: 900px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 70px;
    width: 500px;
    padding: 50px 20px;
  }
`;

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostType) => (
        <PostItem {...frontmatter} key={id} />
      ))}
    </PostListWrapper>
  ) ;
};

export default PostList;
