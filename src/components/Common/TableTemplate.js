import React from 'react';
import styled from '@emotion/styled';

const Default = styled.div`
td{
  text-align:center;
  vertical-align:middle;
}
th{
  font-size:21px;
  height: 6vh;
  color: white;
  padding-top:0.5vh;
 }
  @media (max-width: 750px) {
    display: none;
  }
`;

const Reactive = styled.div`
td{
  text-align:center;
  vertical-align:middle;
}
th{
  font-size:21px;
  height: 5vh;
  color: white;
 }
@media (min-width: 750px) {
  display: none;
}
@media (max-width: 375px) {
  td, th{
    font-size: 14px;
    height: 3vh;
  }
}
`;

export const TableTemplate = ({ prize, team, member }) => {
  return (
    <table>
      <Default>
      <td style={{width:`6rem`}}>{prize}</td>
      <td style={{width:`30rem`}}>{team}</td>
      <td style={{width:`18rem`}}>{member}</td>
      </Default>
      <Reactive>
      <td style={{width:`5rem`}}>{prize}</td>
      <td style={{width:`45rem`}}>{team}</td>
      </Reactive>
    </table>
   
  );
};

export default TableTemplate;

export const CreateHeader = () => {
  return (
    <table style={{background: '#233660'}}>
      <Default>
      <th style={{width:`7rem`}}>🏆</th>
      <th style={{width:`35rem`}}>TEAM</th>
      <th style={{width:`20rem`}}>MEMBER</th>
      </Default>
      <Reactive>
      <th style={{width:`4rem`}}>🏆</th>
      <th style={{width:`30rem`}}>TEAM</th>
      </Reactive>
    </table>
  );
};