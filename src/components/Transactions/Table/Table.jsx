import css from './Table.module.css';
export const Table = ({ children }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </table>
  );
};
