import React from "react";
import styled from "styled-components";

import colors from "../../utils/colors";


const StyledMessage = styled.div`
  margin-bottom: 0.2em;

  .divider {
    width: auto;
    height: 1px;
    background: ${colors.messageDivider};
    margin: 10px 0;
  }

  &:last-child .divider {
    display: none;
  }

  .header {
    display: flex;
    height: 1.3em;

    .avatar-wrapper {
      margin: -2px 20px 20px;
      width: 40px;
      height: 40px;
    }

    .avatar {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      overflow: hidden;
      border-radius: 50%;
      transition: 0.1s opacity ease-in;

      :hover {
        opacity: 0.85;
      }
    }

    .username {
      color: ${colors.memberUsernameChat};

      :hover {
        text-decoration: underline;
      }
    }

    .time {
      color: ${colors.messageTime};
      font-size: 0.75em;
      font-weight: 400;
      margin-left: 0.3em;
    }
  }

  .content {
    margin-left: 80px;

    font-weight: 400;
    font-size: 0.9375em;
    line-height: 1.3;
    color: ${colors.messageContent};
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

export const Message = ({ message }) => {
  return (
    <StyledMessage>
      <div className="header">
        <div className="avatar-wrapper">
          <div
            className="avatar"
            style={{
              backgroundImage: `url(https://thelonelylands.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F47277246&w=3840&q=75)`,
            }}
          />
        </div>
        <div className="data">
          <span className="username">{message.user}</span>
          <span className="time">{message.time}</span>
        </div>
      </div>
      <div className="content">{message.content}</div>
      <div className="divider" />
    </StyledMessage>
  );
};
