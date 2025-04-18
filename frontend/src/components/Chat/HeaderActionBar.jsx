import React from 'react';
import styled from 'styled-components';

import PeopleIcon from '../../icons/People';
import MentionIcon from '../../icons/Mention';
import QuestionMarkIcon from '../../icons/QuestionMark';
import HeaderSearchBar from './HeaderSearchBar';
import { TooltipWrapper } from '../Tooltip';

const StyledHeaderActionBar = styled.div`
  display: flex;
  align-items: center;

  .divider {
    margin: 0 4px;
    width: 1px;
    height: 22px;
    background: hsla(0, 0%, 84.7%, 0.1);
  }
`;

const StyledIconButton = styled.span`
  margin: 0 4px;
  height: 26px;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    opacity: 0.6;

    :hover {
      opacity: 0.8;
    }

    &.active {
      opacity: 1;
    }
  }
`;

const HeaderActionBar = () => (
  <StyledHeaderActionBar>
    <TooltipWrapper content="Members list" direction="bottom">
      <StyledIconButton>
        <PeopleIcon className='active' />
      </StyledIconButton>
    </TooltipWrapper>

    <HeaderSearchBar />

    <div className="divider" />

    <TooltipWrapper content="Mentions" direction="bottom">
      <StyledIconButton>
        <MentionIcon />
      </StyledIconButton>
    </TooltipWrapper>

    <TooltipWrapper content="Help" direction="bottom">
      <StyledIconButton>
        <QuestionMarkIcon />
      </StyledIconButton>
    </TooltipWrapper>
  </StyledHeaderActionBar>
);

export default HeaderActionBar;
