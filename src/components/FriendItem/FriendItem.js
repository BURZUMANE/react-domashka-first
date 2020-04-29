import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import {Status} from "../Status/Status"

const StyledFriendItem = styled.li`
  padding: 5px;
  margin: 0 auto;
  display: flex;
  background-color: #fff;
  box-shadow: 0px 2px 2px 0px rgba(2, 2, 2, 0.02);
  margin-bottom: 10px;
  border-radius: 4px;
  width: 250px;
  img {
    display: block;
    border-radius: 4px;
  }
`;

const Status = styled.span`
  background: ${(props) => (props.online.isOnline ? "green" : "red")};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 20px;
`;

export const FriendItem = ({ friend }) => (
  <StyledFriendItem>
    <Status online={friend} />
    <img className="avatar" src={friend.avatar} alt="" width="48" />
    <p className="name">{friend.name}</p>
  </StyledFriendItem>
);

FriendItem.propTypes = {
    friend: PropTypes.shape({
    vatar: PropTypes.string,
    name: PropTypes.string,
    isOnline:PropTypes.bool,
    id:PropTypes.number,
    
  }),
};

// import React from "react";
// import styled from "styled-components";
// // import PropTypes from "prop-types";

// const StyledFriendItem = styled.li`
//   padding: 5px;
//   margin: 0 auto;
//   display: flex;
//   background-color: #fff;
//   box-shadow: 0px 2px 2px 0px rgba(2, 2, 2, 0.02);
//   margin-bottom: 10px;
//   border-radius: 4px;
//   width: 250px;
//   img {
//     display: block;
//     border-radius: 4px;
//   }
// `;

// export const FriendItem = ({friend }) => {
//     const Status = styled.span`
//     background: ${friend.isOnline ? "red" : "green"};
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     margin: 20px;
//   `;
//   return(
//   <StyledFriendItem>
//     <Status/>
//     <img className="avatar" src={friend.avatar} alt="" width="48" />
//     <p className="name">{friend.name}</p>
//     </StyledFriendItem>
//   )
// };
