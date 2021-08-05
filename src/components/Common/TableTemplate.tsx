import React from 'react';
import styled from '@emotion/styled';

const Member = styled.div`
  @media (max-width: 750px) {
    display: none;
  }
`;

const TableTemplate = ({ prize, team, member }) => {
  return (
    <table>
      <td width="18%">{prize}</td>
      <td width="62%">{team}</td>
      <Member>
        <td width="38%">{member}</td>
      </Member>
    </table>
  );
};

export default TableTemplate;
