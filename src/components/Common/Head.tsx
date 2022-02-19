import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

const Head: FunctionComponent = function () {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HI-ARC</title>
      </Helmet>
    </>
  );
};

export default Head;
