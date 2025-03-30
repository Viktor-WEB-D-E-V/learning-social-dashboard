import css from "./TransactionHistoryItem.module.css";

function TransactionHistoryItem({ item }) {
  return (
    <tr className={css.item} id={item.id}>
      <td className={css.td}>{firstLetterToUpperCase(item.type)}</td>
      <td className={css.td}>{item.amount}</td>
      <td className={css.td}>{item.currency}</td>
    </tr>
  );
}

function firstLetterToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default TransactionHistoryItem;
