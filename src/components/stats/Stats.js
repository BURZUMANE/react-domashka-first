import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types'

const StyledStats = styled.div`
  .stats {
    padding: 0;
    margin:0;   
    border-style: solid;
    border-width: 1px;
    border-color: rgb(228, 233, 240);
    border-radius: 4px;
    background-color: rgb(243, 246, 249);
    height: 80px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    li {
      padding-top:22px;
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 33.333333%;
      border: 1px solid rgb(228, 233, 240);
      .label {
        font-size: 12px;
        font-family: "Lato";
        color: rgb(118, 134, 150);
      }
      .quantity {
        font-size: 14px;
        font-family: "Lato";
        color: rgb(31, 51, 73);
      }
    }
  }
`;

export const Stats = ({ followers, views, likes }) => (
  <StyledStats>
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </StyledStats>
);
