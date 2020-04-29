import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDescr = styled.div`
font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  img {
    display: block;
    border-radius: 50%;
    background-color: rgb(0, 0, 0);
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
    width: 99px;
    height: 99px;
  }
  .tag,
  .location {
    font-size: 14px;
    color: rgb(118, 134, 150);
  }
`;

export const Description = ({
  name,
  tag,
  location,
  avatar,
}) => (
  <StyledDescr>
    <img src={avatar} alt="user avatar"></img>
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </StyledDescr>
);

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
