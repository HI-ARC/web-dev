import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Img, { FluidObject } from 'gatsby-image';

interface PostItemProps {
  title: string;
  communicationimage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.div`
  overflow: hidden;
  margin: 5px auto;
  padding: 5px;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  font-size: 22px;
  font-weight: 500;

  @media (max-width: 980px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
  @media (max-width: 380px) {
    font-size: 17px;
  }
`;

const Image = styled(Img)`
  width: 100%;
  height: 90%;
  border-radius: 10px;
`;

const PostItem: FunctionComponent<PostItemProps> = function ({
    title,
    communicationimage: {
    childImageSharp: { fluid },
  },
}) {
  return (
    <PostItemWrapper>
        <Title>{title}</Title>
        <Image fluid={fluid} alt="Post Item Image" />    
    </PostItemWrapper>
  );
};

export default PostItem;