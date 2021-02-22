import React from "react";
import propTypes from "prop-types";
import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => (
  <table className={styles.transaction_history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
 {items.map(({ id, type, amount, currency }) => (
    <tbody key={id}>
        <tr >
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
    </tbody>
 ))}
  </table>
);

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({
        type: propTypes.string.isRequired,
        amount: propTypes.string.isRequired,
        currency: propTypes.string.isRequired,
      })).isRequired
}

export default TransactionHistory;
