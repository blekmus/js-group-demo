import React from "react";
import styled from "styled-components";

import UserAvatar from "../UserAvatar";

import colors from "../../utils/colors";

const StyledMember = styled.div`
  margin: 0 0 0 8px;
  padding: 1px 0 1px 8px;
  height: 40px;
  border-radius: 3px;

  display: flex;
  align-items: center;

  .member-inner {
    .username {
      color: ${(props) => props.color || colors.memberUsernameOnline};
      font-size: 1em;
      font-weight: 400;
    }

    .status {
      color: ${colors.memberStatus};
      font-size: 0.7em;

      strong {
        font-weight: 800;
      }
    }
  }
`;

const MemberListItem = ({ member }) => {
  let color = "rgb(185, 187, 190)";


  if (member.username === "admin") {
    color = "#71c5ff"
  }

return (
  <StyledMember color={color}>
    <UserAvatar
      className="avatar-wrapper"
      avatarUrl={member.avatar}
    />

    <div className="member-inner">
      <div className="username">{member.username}</div>
      <div className="status">
        Connected to <strong>DiscountCord</strong>
      </div>
    </div>
  </StyledMember>
)
};

export default MemberListItem;
