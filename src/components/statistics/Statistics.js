import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StatItem } from "../StatItem/StatItem";

const StyledStatistics = styled.div`
  margin: 0 auto;
  background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
  box-shadow: 0px 2px 2px 0px rgba(2, 2, 2, 0.02);
  width: 270px;
  margin-bottom:10px;
  border-radius: 4px;
  .label {
    font-size: 12px;
  }
  .percentage {
    font-size: 18px;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  font-size: 16px;
  font-family: "PT Sans", sans-serif;
  color: rgb(71, 89, 101);
  line-height: 70px;
`;

const List = styled.ul`
    margin: 0;
    display: flex;
    padding: 0;
    border-radius: 4px;
`

export const Statistics = ({ stats }) => (
  <StyledStatistics>
    <Title>Upload stats</Title>
    <List>
      {stats.map((item) => (
        <StatItem key={item.id} stat={item} />
      ))}
    </List>
  </StyledStatistics>
);

Statistics.propTypes = {
  stats: PropTypes.array,
};
