import React from "react";
import styled from "styled-components";

import colors from "../../utils/colors";

import ScrollableArea from "../ScrollableArea";
import MemberListItem from "./MemberListItem";

const StyledMemberList = styled.div`
  background: ${colors.grayNormal};
  width: 240px;
  flex-shrink: 0;

  position: relative;
`;

const StyledRoleName = styled.div`
  color: hsla(0, 0%, 100%, 0.4);
  height: 40px;
  font-size: 0.8em;
  line-height: 20px;
  padding: 20px 8px 0 16px;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;

const MembersList = ({ activeMembers }) => {
  const memberElements = activeMembers.map((member, index) => (
    <MemberListItem key={index} member={member} />
  ));

  return (
    <StyledMemberList>
      <ScrollableArea forceVertical tinyStyle autoHide>
        <StyledRoleName>
          Online — {activeMembers.length ? activeMembers.length : 0}
        </StyledRoleName>

        {memberElements}
      </ScrollableArea>
    </StyledMemberList>
  );
};

export default MembersList;
