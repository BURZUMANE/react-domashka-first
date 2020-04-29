import React from 'react'
import styles from './TransactionHistory.module.css';
import {Tr} from '../SingleTransaction/SingleTransaction'
export const Table = ({transactions}) => {
    const btnClasses = [styles.transactionHistory];
    const mainTableClass =[styles.main];

  return (
    <table className={mainTableClass}>
      <thead className={btnClasses}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
      {transactions.map((item, index) => (
      <Tr transaction={item} key={item.id} shift={index}></Tr>
    ))}
      </tbody>
    </table>
  );
};


