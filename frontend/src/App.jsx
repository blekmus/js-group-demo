import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { io } from "socket.io-client";
import { v4 as uuid } from "uuid";

import GlobalStyles from "./components/GlobalStyles";
import ScrollbarStyles from "./components/ScrollbarStyles";
import Navbar from "./components/Navbar";
import { TooltipsManager } from "./components/Tooltip";
import Channels from "./components/Channels";
import Chat from "./components/Chat";
import useActiveMembersStore from "./stores/useActiveMembersStores";
import useChatStore from "./stores/useChatStores";

const guilds = [
  {
    id: 1,
    name: "Class Server",
    icon: "https://api.dicebear.com/9.x/icons/svg?seed=Cap",
    channels: [
      {
        id: 1,
        name: "general",
        socket: "general",
      },
      {
        id: 2,
        name: "lesson",
        socket: "lesson",
      },
    ],
  },
  {
    id: 2,
    name: "Other",
    icon: "https://api.dicebear.com/9.x/icons/svg?seed=bdd",
    channels: [
      {
        id: 1,
        name: "default",
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

const socket = io(import.meta.env.VITE_SOCKET_URL);

const App = () => {
  const [currentArea, setCurrentArea] = useState("CHAT");
  const [selectedGuildId, setSelectedGuildId] = useState(1);
  const [selectedChannelId, setSelectedChannelId] = useState(1);

  const { addMember } = useActiveMembersStore();
  const { addMessage } = useChatStore();

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
          <Chat channel={selectedChannel} guild={selectedGuild} handlePostMessage={handlePostMessage} />
        </>
      );
    }
  };

  const handleGuildClick = (guildId) => {
    setSelectedGuildId(guildId);
    setCurrentArea("CHAT");
  };

  const handleChannelClick = (guildId, channelId) => {
    if (currentArea === "CHAT") {
      setSelectedGuildId(guildId);
      setSelectedChannelId(channelId);
    }
  };

  useEffect(() => {
    function onGeneralMessage({ message, username }) {
      addMessage("general", {
        id: uuid(),
        content: message,
        user: username,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      addMember("general", username);
    }

    function onLessonMessage({ message, username }) {
      addMessage("lesson", {
        id: uuid(),
        content: message,
        user: username,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      addMember("lesson", username);
    }

    socket.on("general", onGeneralMessage);
    socket.on("lesson", onLessonMessage);

    return () => {
      socket.off("general", onGeneralMessage);
      socket.off("lesson", onLessonMessage);
    };
  }, [addMessage, addMember]);

  const handlePostMessage = (message) => {
    if (message.trim()) {
      socket.emit(selectedChannel.socket, { username: "admin", message });
      addMessage(selectedChannel.name, {
        id: uuid(),
        content: message,
        user: "admin",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
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
        selectedGuildId={selectedGuildId}
        homeSelected={currentArea === "HOME"}
      />
      <SelectedArea />
    </StyledApp>
  );
};

export default App;
