import React from "react";
import styled from "styled-components";
import { Description } from "../description/Description";
import { Stats } from "../stats/Stats";

import userInfo from "../../data/user.json";
console.log(userInfo);

console.log(styled);

const StyledProfiled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px auto;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
  width: 270px;
  height: 330px;
`;

export const Profile = () => (
  <StyledProfiled>
    <Description {...userInfo}></Description>
    <Stats {...userInfo.stats}></Stats>
  </StyledProfiled>
);

