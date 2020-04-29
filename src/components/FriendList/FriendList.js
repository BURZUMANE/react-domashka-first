import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FriendItem } from "../FriendItem/FriendItem";

const StyledFriends = styled.ul`
padding:0;
box-shadow: 0px 2px 2px 0px rgba(2, 2, 2, 0.02);
`;


export const Friends = ({friends}) => (
  <StyledFriends>
        {friends.map((item) => (
           <FriendItem key={item.id} friend={item}/>
      ))}
  </StyledFriends>
);


StyledFriends.propTypes ={
    freind: PropTypes.array,
}