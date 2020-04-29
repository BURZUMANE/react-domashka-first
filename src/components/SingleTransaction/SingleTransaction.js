import React from "react";
import styles from "./SingleTransaction.module.css";
import PropTypes from 'prop-types';

export const Tr = ({ transaction, shift }) => {
  const rowBgClass = (shift%2===0) ? styles.row : styles.even;
//   const evenRow = transaction.type === "payment" ? styles.row : styles.even;
  return (
    <tr className={rowBgClass}>
      <td >{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  );
};


Tr.propTypes = {
    shit:PropTypes.number,
    transaction: PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        transaction: PropTypes.string
      }),
}