import React, { useMemo, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./components/globalstyles";
import ScrollbarStyles from "./components/scrollbarstyles";
import Navbar from "./components/Navbar";
import { TooltipsManager } from "./components/Tooltip";
import Channels from "./components/Channels";
import Chat from "./components/Chat";

const guilds = [
  {
    id: 1,
    name: "Class Server",
    icon: "https://i.ytimg.com/vi/TUuRPk5qVRk/maxresdefault.jpg",
    channels: [
      {
        id: 1,
        name: "general",
        socket: "general",
      },
      {
        id: 2,
        name: "lesson",
        socket: "very-secret",
      },
    ],
  },
  {
    id: 2,
    name: "Other",
    icon: "https://i.imgur.com/EOASYoR.png",
    channels: [
      {
        id: 1,
        name: "Default",
        socket: "default",
      },
    ],
  },
];

const StyledApp = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;

  .app-content {
    flex: 1 1 auto;
  }
`;

const App = () => {
  const [currentArea, setCurrentArea] = useState("CHAT");
  const [selectedGuildId, setSelectedGuildId] = useState(1);
  const [selectedChannelId, setSelectedChannelId] = useState(1);

  const selectedGuild = useMemo(() => {
    return selectedGuildId
      ? guilds.find((g) => g.id === selectedGuildId)
      : null;
  }, [selectedGuildId]);

  const selectedChannel = useMemo(() => {
    return selectedGuild.channels.find((c) => c.id === selectedChannelId);
  }, [selectedGuild, selectedChannelId]);

  const SelectedArea = () => {
    if (currentArea === "HOME") {
      return <div>HOME</div>;
    } else {
      return (
        <>
          <Channels
            guild={selectedGuild}
            selectedChannelId={selectedChannelId}
            onChannelClick={handleChannelClick}
          />
          <Chat
            channel={selectedChannel}
            guild={selectedGuild}
          />
        </>
      );
    }
  };

  const handleHomeClick = () => {
    setSelectedGuildId(null);
    setCurrentArea("HOME");
  };

  const handleGuildClick = (guildId) => {
    setSelectedGuildId(guildId);
    setCurrentArea("CHAT");
  };

  const handleChannelClick = (guildId, channelId) => {
    if (currentArea === "HOME") {
      // setSelectedPrivateChannelId(channelId);
      console.log("Private channel")
    } else if (currentArea === "CHAT") {
      setSelectedGuildId(guildId);
      setSelectedChannelId(channelId);
    }
  };

  return (
    <StyledApp>
      <TooltipsManager />
      <GlobalStyles />
      <ScrollbarStyles />

      <Navbar
        guilds={guilds}
        onGuildClick={handleGuildClick}
        onHomeClick={handleHomeClick}
        selectedGuildId={selectedGuildId}
        homeSelected={currentArea === "HOME"}
      />
      <SelectedArea />
    </StyledApp>
  );
};

export default App;
