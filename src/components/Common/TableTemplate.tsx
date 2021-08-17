import React from 'react';
import styled from '@emotion/styled';


const Default = styled.div`
th{
  font-size:21px;
  height: 6vh;
  width:20.5vw;
  background-color:#233660;
  color: white;
  padding-top:0.5vh;
 }
  td{width: 20.5vw; }
  @media (max-width: 750px) {
    display: none;
  }
`;

const Reactive = styled.div`
th{
  height: 5vh;
  width:45vw;
  background-color:#233660;
  color: white;
 }
td{ width: 45vw;}
@media (min-width: 750px) {
  display: none;
}
`;

export const TableTemplate = ({ prize, team, member }) => {
  return (
    <table>
      <Default>
      <td>{prize}</td>
      <td>{team}</td>
      <td>{member}</td>
      </Default>
      <Reactive>
      <td>{prize}</td>
      <td>{team}</td>
      </Reactive>
    </table>
   
  );
};

export default TableTemplate;

export const CreateHeader = () => {
  return (
    <table>
      <Default>
      <th>🏆</th>
      <th>TEAM</th>
      <th>MEMBER</th>
      </Default>
      <Reactive>
      <th>🏆</th>
      <th>TEAM</th>
      </Reactive>
    </table>
  );
};