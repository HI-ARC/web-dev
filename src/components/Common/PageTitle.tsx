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
  margin: 2.0em 75px 10px;

  @media (max-width: 600px) {
    font-size: 37px;
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
