import React, { useState } from "react";
import styled from "styled-components";

import ContentHeader from "../ContentHeader";
import HeaderActionBar from "./HeaderActionBar";
import ChannelName from "../ChannelName";
import MessagesWrapper from "./MessagesWrapper";
import MembersList from "./MembersList";

import colors from "../../utils/colors";

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

const Chat = ({ channel, guild }) => {
  const [activeMembers, setActiveMembers] = useState([
    "member1",
    "member2",
    "member3",
    "member4",
    "member5",
  ]);

  // setActiveMembers(["member1", "member2", "member3", "member4", "member5"]);

  const messages = [
    {
      id: 1,
      content: "Hello",
      user: "something",
      time: "5:00 PM",
    },
    {
      id: 5,
      content: "Hello",
      user: "something",
      time: "8:00 PM",
    },

    {
      id: 4,
      content: "Hello",
      user: "something",
      time: "9:00 PM",
    },

    {
      id: 2,
      content: "Hello",
      user: "something",
      time: "10:00 PM",
    },

    {
      id: 3,
      content: "Hello",
      user: "something",
      time: "11:00 PM",
    },
  ];

  return (
    <StyledChat className="app-content">
      <ContentHeader
        content={
          <ChannelName
            name={channel.name}
            isUser={false}
            selected={true}
          />
        }
        rightContent={<HeaderActionBar />}
      />

      <div className="content-wrapper">
        <div className="messages-container">
          <MessagesWrapper
            guild={guild}
            messages={messages}
            channelName={channel.name}
          />
          {/* <NewMessageWrapper channelName={channelName} isPrivate={isPrivate} /> */}
        </div>
        <MembersList activeMembers={activeMembers} />
      </div>
    </StyledChat>
  );
};

export default Chat;
