import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import ChannelName from '../ChannelName';

const StyledChannel = styled.div`
  margin: 2px 0 2px 8px;
  padding: 0 8px;
  height: 32px;
  background-color: ${props => (props.selected === 1 ? colors.channelSelected : 0)};
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Channel = ({ name, isSelected, onClick }) => (
  <StyledChannel selected={isSelected} onClick={onClick}>
    <ChannelName name={name} selected={isSelected} />
  </StyledChannel>
);

export default Channel;
