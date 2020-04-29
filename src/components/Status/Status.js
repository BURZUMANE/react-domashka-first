import React from "react";
// import styled from "styled-components";
import styles from "./Status.module.css"
// import PropTypes from "prop-types";

const StyledStatus = styled.span`
background: ${props => props.isOnline ? "white" : "palevioletred"};
width: 20px;
height: 20px;
border-radius: 50%;
margin: 20px;
`;


export const Status = ({online}) => (
    <StyledStatus>
    </StyledStatus>
);
  
  