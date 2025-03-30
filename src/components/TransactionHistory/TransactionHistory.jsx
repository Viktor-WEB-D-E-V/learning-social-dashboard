import TransactionHistoryItem from "./TransactionHistoryItem/TransactionHistoryItem";

import "./TransactionHistory.module.css";
function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return <TransactionHistoryItem key={item.id} item={item} />;
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
