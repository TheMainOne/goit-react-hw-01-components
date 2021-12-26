import React from "react";
import propTypes from 'prop-types';
import { Table, TableTitle, TableColumn } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableTitle>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableTitle>
      {items.map(item => (
        <TableColumn key={item.id}>
          <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </TableColumn>
      ))}
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: propTypes.array,
};
