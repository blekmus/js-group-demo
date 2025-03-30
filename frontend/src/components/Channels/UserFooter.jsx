import React from 'react';
import styled from 'styled-components';

import UserAvatar from '../UserAvatar';
import UnmuteIcon from '../../icons/Unmute';
import HeadphonesIcon from '../../icons/Headphones';
import GearIcon from '../../icons/Gear';
import { TooltipWrapper } from '../Tooltip';

import colors from '../../utils/colors';

const StyledUserFooter = styled.div`
  margin-bottom: 1px;
  padding: 0 10px;
  height: 52px;
  display: flex;
  align-items: center;

  color: #fff;
  background: ${colors.channelsUserFooterBackground};
  font-weight: 400;

  .avatar-wrapper {
    cursor: pointer;
  }

  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
  }

  .username {
    font-size: 0.85em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tag {
    font-size: 0.73em;
    opacity: 0.4;
  }

  .buttons {
    display: flex;
    flex: 0 1 auto;
  }
`;

const StyledIconButton = styled.button`
  margin: 0;
  padding: 0;
  outline: none;
  width: 32px;
  height: 32px;

  cursor: pointer;
  background: none;
  border: 0;
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: rgba(24, 25, 28, 0.3);
  }

  svg {
    width: 18px;
    height: 18px;
    color: #fff;
    opacity: 0.6;

    :hover {
      opacity: 0.8;
    }
  }
`;

const UserFooter = () => {
  return (
    <StyledUserFooter>
      <UserAvatar
        className="avatar-wrapper"
        avatarUrl="https://thelonelylands.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F47277246&w=3840&q=75"
      />

      <div className="content">
        <div className="username">admin</div>
        <div className="tag">#696969</div>
      </div>

      <div className="buttons">
        <TooltipWrapper content="Unmute" direction="top">
          <StyledIconButton>
            <UnmuteIcon />
          </StyledIconButton>
        </TooltipWrapper>

        <TooltipWrapper content="Deafen" direction="top">
          <StyledIconButton>
            <HeadphonesIcon />
          </StyledIconButton>
        </TooltipWrapper>

        <TooltipWrapper content="User Settings" direction="top">
          <StyledIconButton>
            <GearIcon />
          </StyledIconButton>
        </TooltipWrapper>
      </div>
    </StyledUserFooter>
  );
}

export default UserFooter;