import TransactionList from "../TransactionList/TransactionList";
import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map((item) => (
        <tbody key={item.id}>
          <TransactionList transaction={item} />
        </tbody>
      ))}
    </table>
  );
}
