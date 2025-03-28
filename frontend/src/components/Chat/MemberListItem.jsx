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

const MemberListItem = ({ member }) => (
  <StyledMember color="rgb(185, 187, 190)">
    <UserAvatar
      className="avatar-wrapper"
      avatarUrl="https://thelonelylands.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F47277246&w=3840&q=75"
    />

    <div className="member-inner">
      <div className="username">{member}</div>
      <div className="status">
        Connected to <strong>DiscountCord</strong>
      </div>
    </div>
  </StyledMember>
);

export default MemberListItem;
