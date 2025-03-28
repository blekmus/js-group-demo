import React from 'react';
import styled from 'styled-components';

import AtIcon from '../icons/At';
import HashtagIcon from '../icons/Hashtag';

const StyledChannelName = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #8a8e94;
    margin-right: 3px;
  }

  span {
    font-weight: 500;
    font-size: '1em';
    color: ${props => props.selected ? '#fff' : '#72767d'};
    padding-bottom: 1px;
    padding-left: 3px;
  }
`;

const ChannelName = ({ name, selected, isUser }) => (
  <StyledChannelName selected={selected}>
    {isUser ? <AtIcon /> : <HashtagIcon />}
    <span>{name}</span>
  </StyledChannelName>
);

export default ChannelName;
