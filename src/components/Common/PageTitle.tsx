import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PageTitleProps {
  title: string;
}

const PageTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  color: #233660;
  font-weight: bolder;
  font-size: 45px;
  margin: 2.5em 75px 40px;

  @media (max-width: 700px) {
    font-size: 35px;
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
