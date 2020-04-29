import React from "react";
import styles from "./EnemyList.module.css";
import { EnemyItem } from "../EnemyItem/EnemyItem";
import PropTypes from 'prop-types';

export const EnemyList = ({ enemies }) => {
  const mainClass = [styles.main];
  return (
    <ul className={mainClass}>
      {enemies.map((item) => (
        <EnemyItem key={item.id} enemyItem={item}></EnemyItem>
      ))}
    </ul>
  );
};

EnemyList.propTypes = {
    enemies: PropTypes.array,
  };