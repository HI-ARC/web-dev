import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface RecordLinkProps {}

const LinkWrapper = styled.div`
width: 12rem;
height: 2.5rem;
margin-left: 1rem; 
text-align: center;
vertical-align: middle;
display: flex;
flex-direction: row;
@media (max-width: 750px) {
  display: none;
}
`;

const ProblemWrapper = styled.div`
width: 4rem;
height: 2.5rem;
margin-left: 0.5rem;
@media (max-width: 750px) {
  height: 3vh;
  margin-left:4vw;
}
`;

const Problem = styled.div`
font-size: 21px;
padding-top: 0.5rem;
color: gray;
:hover {
  color: black;
}
`;

const ScoreboardWrapper = styled.div`
width: 7rem;
height: 2.5rem;
@media (max-width: 750px) {
  height: 3vh;
  margin-left:4vw;
}
`;

const Scoreboard = styled.div`
font-size: 22px;
padding-top: 0.5rem;
color: gray;
:hover {
  color: black;
}
`;

const IsValid : FunctionComponent<RecordLinkProps> = function ({pLink,sLink})
{
    if(pLink!=undefined && sLink!=undefined){
            <LinkWrapper>
            <ProblemWrapper>
              <Problem>
                <a href={pLink} target="_blank">
                  문제
                </a>
              </Problem>
            </ProblemWrapper>
            <ScoreboardWrapper>
              <Scoreboard>
                <a href={sLink} target="_blank">
                  스코어보드
                </a>
              </Scoreboard>
            </ScoreboardWrapper>
          </LinkWrapper>   
    }
    return (
      <LinkWrapper>
        <ProblemWrapper>
          <Problem>
            <a href={pLink} target="_blank"></a>
          </Problem>
        </ProblemWrapper>
        <ScoreboardWrapper>
          <Scoreboard>
            <a href={sLink} target="_blank"></a>
          </Scoreboard>
        </ScoreboardWrapper>
      </LinkWrapper>
    )
};

export default IsValid;