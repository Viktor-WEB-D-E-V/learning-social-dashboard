import TransactionHistoryItem from "./TransactionHistoryItem/TransactionHistoryItem";

import style from "./TransactionHistory.module.css";
function TransactionHistory({ items }) {
  return (
    <table className={style.table}>
      <thead className={style.head}>
        <tr>
          <th className={style.th}>Type</th>
          <th className={style.th}>Amount</th>
          <th className={style.th}>Currency</th>
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
