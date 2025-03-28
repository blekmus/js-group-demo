import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import GuildIcon from "./GuildIcon";
import ScrollableArea from "../ScrollableArea";
import { TooltipWrapper } from "../Tooltip";

const StyledNavbar = styled.div`
  width: 70px;
  background: ${colors.grayDarker};
  position: relative;
  flex-shrink: 0;
  padding-bottom: 8px;

  .content {
    padding-bottom: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const GuildSeparator = styled.div`
  height: 2px;
  width: 30px;
  margin-top: 8px;
  background: ${colors.separator};
`;

const Navbar = ({ guilds, onGuildClick, selectedGuildId, onHomeClick, homeSelected }) => (
  <StyledNavbar>
    <ScrollableArea invisible>
      <div className="content">
        <TooltipWrapper content="Home" direction="right">
          <GuildIcon isHome={true} selected={homeSelected} onClick={onHomeClick} />
        </TooltipWrapper>

        <GuildSeparator />

        {guilds.map((guild) => (
          <TooltipWrapper content={guild.name} direction="right" key={guild.id}>
            <GuildIcon
              name={guild.name}
              icon={guild.icon}
              selected={selectedGuildId === guild.id}
              onClick={() => onGuildClick(guild.id)}
            />
          </TooltipWrapper>
        ))}
      </div>
    </ScrollableArea>
  </StyledNavbar>
);

export default Navbar;
