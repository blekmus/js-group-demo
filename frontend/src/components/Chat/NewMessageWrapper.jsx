import React from 'react';
import styled from 'styled-components';
import NewMessageForm from './NewMessageForm';

const StyledNewMessageWrapper = styled.div`
  margin: 0 20px;
`;

const StyledContainer = styled.div`
  margin-bottom: 15px;
  padding-top: 5px;
`;

const NewMessageWrapper = ({ onPost }) => (
  <StyledNewMessageWrapper>
    <StyledContainer>
      <NewMessageForm onPost={onPost} />
    </StyledContainer>
  </StyledNewMessageWrapper>
);

export default NewMessageWrapper;
