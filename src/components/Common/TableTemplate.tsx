import React from 'react';

const TableTemplate = ({ prize, team, member }) => {
  return (
    <table>
      <td width="16%">{prize}</td>
      <td width="64%">{team}</td>
      <td width="38%">{member}</td>
    </table>
  );
};

export default TableTemplate;
