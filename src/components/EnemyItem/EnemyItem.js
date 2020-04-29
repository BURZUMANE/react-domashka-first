import React from "react";
import styles from "./EnemyItem.module.css";
import PropTypes from 'prop-types';

export const EnemyItem = ({enemyItem}) => {
    const mainClass = styles.main;
    const statusClass = enemyItem.isOnline ? styles.active : styles.inActive;
  return (
    <li className={mainClass}>
      <span className={statusClass}></span>
      <img className="avatar" src={enemyItem.avatar} alt="" width="48" />
  <p className="name">{enemyItem.name}</p>
    </li>
  );
};


EnemyItem.propTypes = {
    enemyItem: PropTypes.shape({
        name: PropTypes.string,
        avatar: PropTypes.string,
        isOnline: PropTypes.bool
      }),
}