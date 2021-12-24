import propTypes from "prop-types";
import { Table } from "./TransactionHistory.styled";

export default function TransactionHistory({ items }) {
    return <Table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    {items.map(item =>   <tbody key={item.id}>
    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  </tbody>)}
</Table>
}

TransactionHistory.propTypes = {
    items: propTypes.array,
}
