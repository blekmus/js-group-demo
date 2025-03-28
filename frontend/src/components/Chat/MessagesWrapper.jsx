import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import { Message } from "./MemberMessage";
import WelcomeChannelMessage from "./WelcomeChannelMessage";
import ScrollableArea from "../ScrollableArea";

const StyledMessagesWrapper = styled.div`
  flex: 1 1 auto;
  position: relative;
`;

const MessagesWrapper = ({ channelName, messages }) => {
  const bottomElement = useRef(null);

  useLayoutEffect(() => {
    bottomElement.current.scrollIntoView({ behavior: "instant" });
  });

  let messagesComponent = [];

  messages.forEach((message) => {
    messagesComponent.push(
        <Message key={message.id} message={message}>{message.content}</Message>
    );
  });

  return (
    <StyledMessagesWrapper>
      <ScrollableArea>
        <WelcomeChannelMessage channelName={channelName} />
        {messagesComponent}
        <div ref={bottomElement} />
      </ScrollableArea>
    </StyledMessagesWrapper>
  );
};

export default MessagesWrapper;
