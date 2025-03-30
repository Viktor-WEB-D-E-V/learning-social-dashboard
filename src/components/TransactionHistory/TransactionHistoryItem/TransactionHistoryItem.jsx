import css from "./TransactionHistoryItem.module.css";

function TransactionHistoryItem({ item }) {
  return (
    <tr className={css.item} id={item.id}>
      <td>{firstLetterToUpperCase(item.type)}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
}

function firstLetterToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default TransactionHistoryItem;
