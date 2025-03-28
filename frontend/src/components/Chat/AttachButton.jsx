import React from 'react';
import styled from 'styled-components';

import AttachButtonPlus from '../../icons/AttachButtonPlus';

const StyledAttachButton = styled.button`
  background: 0;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex: 0 0 auto;

  > div {
    width: 24px;
    height: 24px;
    color: white;
    transition: all 0.2s ease;
  }

  :hover > div {
    color: white;
    width: 26px;
    height: 26px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const AttachButton = () => (
  <StyledAttachButton>
    <div>
      <AttachButtonPlus />
    </div>
  </StyledAttachButton>
);


export default AttachButton;