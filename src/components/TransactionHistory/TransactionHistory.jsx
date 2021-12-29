import React from "react";
import propTypes from 'prop-types';
import { Table, TableTitle, TableHeader, TableColumn } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableTitle>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
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
items: propTypes.arrayOf(
propTypes.shape({
id: propTypes.string.isRequired,
type: propTypes.string.isRequired,
amount: propTypes.string.isRequired,
currency: propTypes.string.isRequired,
}),
),
};