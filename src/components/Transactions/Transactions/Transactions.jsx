import { Table } from '../Table/Table';
export const Transactions = ({ items }) => {
  return (
    <Table>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </Table>
  );
};
