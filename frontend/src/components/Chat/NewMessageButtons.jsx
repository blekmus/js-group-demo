import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

import EmojiPickerButton from './EmojiPickerButton';

const StyledButtonsBar = styled.div`
  display: flex;
  padding-right: 6px;
`;

const ButtonContainer = styled.button`
  background: 0;
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.$outerwidth}px;
  height: 44px;
  flex: 0 0 auto;

  > div {
    width: ${props => props.$iconwidth}px;
    height: ${props => props.$iconheight}px;
    color: ${colors.icon};
    transition: all 0.2s ease;
  }

  :hover > div {
    color: ${colors.iconHover};
    width: ${props => props.$iconwidth + 2}px;
    height: ${props => props.$iconheight + 2}px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const messageButtons = () => (
  <StyledButtonsBar>
    <EmojiPickerButton />
  </StyledButtonsBar>
);


export default messageButtons