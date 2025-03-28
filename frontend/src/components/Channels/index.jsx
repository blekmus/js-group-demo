import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

import ScrollableArea from '../ScrollableArea';
import UserFooter from './UserFooter';
import ExpandArrowIcon from '../../icons/ExpandArrow';
import PlusAltIcon from '../../icons/PlusAlt';
import Channel from './Channel';

const StyledChannels = styled.div`
  width: 240px;

  display: flex;
  flex-direction: column;
  background: ${colors.grayNormal};
`;

const StyledHeader = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 2px 0 rgba(0, 0, 0, 0.06);
  color: #fff;
  cursor: pointer;
  transition: background 0.1s ease-in-out;
`;

const StyledChannelHeaderContent = styled.div`
  flex: 1;

  padding: 0 12px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .guild-name {
    margin-top: 1px;
  }

  svg {
    margin-top: 3px;
    opacity: 0.6;

    path {
      stroke-dasharray: 7;
      stroke-dashoffset: 1;
      stroke-width: 2px;
    }
  }
`;

const StyledSearchBar = styled.input`
  margin: 0 12px 0 12px;
  padding: 7px 8px 5px 10px;
  width: 100%;
  height: 32px;

  background: #25272b;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  font-size: 0.87em;
  color: #b9bbbe;

  ::placeholder {
    opacity: 0.6;
  }
`;

const StyledContent = styled.div`
  padding-right: 8px;
  flex: 1;
  position: relative;
`;

const StyledCategory = styled.div`
  padding-top: 28px;
`;

const StyledCategoryHeading = styled.div`
  padding: 0 8px 0 18px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 700;
  color: ${colors.channelName};

  > svg {
    color: ${colors.channelName};
    position: absolute;
    left: 3px;
    top: 2px;
    transform: rotateZ(${(props) => (props.isCollapsed ? 270 : 0)}deg);
  }
`;

const StyledAddButton = styled.button`
  background: 0;
  border: 0;
  margin: 0;
  padding: 0;
  height: 18px;
  width: 18px;
  cursor: pointer;

  svg * {
    fill: ${colors.channelName};
  }
`;

const Channels = ({ guild, selectedChannelId, onChannelClick }) => {
  const getHeaderContent = () => {
    return (
      <StyledChannelHeaderContent>
        <div className="guild-name">{guild.name}</div>
        <svg width="18" height="18">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h18v18H0" />
            <path stroke="#FFF" d="M4.5 4.5l9 9" strokeLinecap="round" />
            <path stroke="#FFF" d="M13.5 4.5l-9 9" strokeLinecap="round" />
          </g>
        </svg>
      </StyledChannelHeaderContent>
    );
  };

  return (
    <StyledChannels>
      <StyledHeader>{getHeaderContent()}</StyledHeader>

      <StyledContent>
        <ScrollableArea forceVertical tinyStyle autoHide>
          <StyledCategory>
            <StyledCategoryHeading>
              <ExpandArrowIcon />
              GENERAL
              <StyledAddButton>
                <PlusAltIcon />
              </StyledAddButton>
            </StyledCategoryHeading>

            {guild.channels.map((channel) => {
              const isSelected = selectedChannelId === channel.id;

              return (
                <Channel
                  key={channel.id}
                  name={channel.name}
                  isSelected={isSelected}
                  onClick={() => onChannelClick(guild.id, channel.id)}
                />
              );
            })}
          </StyledCategory>
        </ScrollableArea>
      </StyledContent>

      <UserFooter />
    </StyledChannels>
  );
};

export default Channels;