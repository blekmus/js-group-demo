import React from "react";
import styled from "styled-components";

import ContentHeader from "../ContentHeader";
import HeaderActionBar from "./HeaderActionBar";
import ChannelName from "../ChannelName";
import MessagesWrapper from "./MessagesWrapper";
import MembersList from "./MembersList";
import NewMessageWrapper from "./NewMessageWrapper";
import colors from "../../utils/colors";

import useChatStore from "../../stores/useChatStores";
import useActiveMembersStore from "../../stores/useActiveMembersStores";

const StyledChat = styled.div`
  background: ${colors.grayLight};

  display: flex;
  flex-direction: column;

  .content-wrapper {
    display: flex;
    height: 100%;
  }

  .messages-container {
    flex: 1 1 auto;

    display: flex;
    flex-direction: column;
  }
`;


const Chat = ({ channel, guild, handlePostMessage }) => {
  const { activeMembers } = useActiveMembersStore();
  const { messages } = useChatStore();


  return (
    <StyledChat className="app-content">
      <ContentHeader
        content={
          <ChannelName name={channel.name} isUser={false} selected={true} />
        }
        rightContent={<HeaderActionBar />}
      />

      <div className="content-wrapper">
        <div className="messages-container">
          <MessagesWrapper
            guild={guild}
            messages={messages[channel.name] || []}
            channelName={channel.name}
          />
          <NewMessageWrapper onPost={handlePostMessage} />
        </div>
        <MembersList activeMembers={activeMembers[channel.name] || []} />
      </div>
    </StyledChat>
  );
};

export default Chat;
