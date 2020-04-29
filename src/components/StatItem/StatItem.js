import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledStat = styled.li`
width:20%;
padding: 10px 0;
font-family: "PT Sans", sans-serif;
color: #fff;
display: flex;
flex-direction: column;
text-align: center;
:nth-child(1) {
    background: #4fc4f6;
  }
:nth-child(2) {
    background: #a33cf2;
  }
:nth-child(3) {
    background: #e64c65;
  }
:nth-child(4) {
    background: #21b8c6;
  }
:nth-child(5) {
    background: #4fc4f6;
  }
`;

export const StatItem = ({stat}) => (
  <StyledStat>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
  </StyledStat>
);

StatItem.propTypes = {
    stat: PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number
      }),
}

