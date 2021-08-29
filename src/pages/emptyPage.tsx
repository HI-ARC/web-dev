import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Template from 'components/Common/Template';

const DescriptionWrapper=styled.div`
    margin: 5vh 10vw;
    width: 80vw;
    height: 60vh;
`
;

const Description=styled.div`
    margin: 1vh 1vw;
    width:78vw;
    height:58vh;
    item-align: center;
    vertical-align: middle;
`;

const Text = styled.text`
    color: gray;
    font-weight: bold;
    font-size: 10vw;
`;

const EmptyPage: FunctionComponent = () => {
  return (
    <>
      <Template title="이 페이지는 비어있어요">
        <DescriptionWrapper>
            <Description>
                <Text>업데이트 <br/>예정입니다.</Text>
            </Description>
        </DescriptionWrapper>
      </Template>
    </>
  );
};

export default EmptyPage;
