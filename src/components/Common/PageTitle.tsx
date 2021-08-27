import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PageTitleProps {
  title: string;
}

const PageTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  color: #233660;
  font-weight: bolder;
  font-size: 42px;
  margin: 2.2em 75px 0px;

  @media (max-width: 710px) {
    font-size: 37px;
  }
  @media (max-width: 450px) {
    font-size: 35px;
    margin: 2.2em 50px 0px;
  }
  @media (max-width: 400px) {
    font-size: 32px;
    margin: 2.2em 45px 0px;
  }
  @media (max-width: 380px) {
    font-size: 30px;

  }
`;

const PageTitle: FunctionComponent<PageTitleProps> = function ({ title }) {
  return (
    <PageTitleWrapper>
      {title}
    </PageTitleWrapper>
  );
};

export default PageTitle;
