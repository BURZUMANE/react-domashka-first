import React, { Fragment } from "react";
import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/Statistics";
import statistics from '../data/statistical-data.json'
import friendsData from "../data/friends.json";
// import {Friends} from './FriendList/FriendList'
import { Table } from "./TransactionHistory/TransactionHistory";
import transactions from "../data/transactions.json"
import { EnemyList } from "./EnemyList/EnemyList";


// console.log(statistics)
const App = () => (
  <Fragment>
    <Profile />
    <Statistics stats={statistics}/>
    <EnemyList enemies={friendsData}></EnemyList>
    {/* <Friends friends={friendsData}/> */}
    <Table transactions={transactions}/>
  </Fragment>
);

export default App;
