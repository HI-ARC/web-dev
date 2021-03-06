import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import PageTitle from 'components/Common/PageTitle';
import Scroll from 'components/Common/Scroll';
import BackButton from 'components/Common/BackButton';

interface TemplateProps {
  title: string;
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
`;

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  children,
}) {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <PageTitle title={title} />
      {children}
      <Scroll showBelow={250} />
      <BackButton showBelow={250} />
      <Footer />
    </Container>
  );
};

export default Template;
