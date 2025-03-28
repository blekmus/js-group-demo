import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";

const StyledTooltipsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledTooltipWrapper = styled.div`
  position: absolute;
  z-index: 999;

  top: ${(props) => props.position?.y}px;
  left: ${(props) => props.position?.x}px;

  &.bottom {
    transform: translateX(-50%);
  }

  &.top {
    transform: translate(-50%, -100%);
  }

  &.right {
    transform: translateY(-50%);
  }
`;


const TooltipsManager = () => {
  const [tooltipState, setTooltipState] = useState({
    isVisible: false,
    content: null,
    direction: null,
    position: null,
  });

  const instanceRef = useRef(null);

  useEffect(() => {
    instanceRef.current = {
      show: (config) => {
        setTooltipState({
          isVisible: true,
          ...config,
        });
      },
      hide: () => {
        setTooltipState((prev) => ({
          ...prev,
          isVisible: false,
        }));
      },
    };
  }, []);

  // Expose static-like methods globally
  useEffect(() => {
    window.TooltipsContainer = instanceRef.current;
  }, []);

  const { isVisible, direction, content, position } = tooltipState;

  return (
    <StyledTooltipsContainer>
      {isVisible && (
        <StyledTooltipWrapper className={direction} position={position}>
          <Tooltip direction={direction}>{content}</Tooltip>
        </StyledTooltipWrapper>
      )}
    </StyledTooltipsContainer>
  );
};

const TooltipWrapper = ({ direction, content, children }) => {
  const handleMouseEnter = (element) => {
    const { currentTarget: target } = element;
    const targetRect = target.getBoundingClientRect();

    let x, y;

    switch (direction) {
      case "right":
        x = targetRect.left + targetRect.width + 8;
        y = targetRect.top + targetRect.height / 2;
        break;
      case "bottom":
        x = targetRect.left + targetRect.width / 2;
        y = targetRect.top + targetRect.height + 8;
        break;
      case "top":
        x = targetRect.left + targetRect.width / 2;
        y = targetRect.top - 8;
        break;
      default:
        x = targetRect.left;
        y = targetRect.top;
    }

    window.TooltipsContainer.show({
      position: { x, y },
      direction,
      content,
    });
  };

  const handleMouseLeave = () => {
    window.TooltipsContainer.hide();
  };

  return React.Children.map(children, (child) =>
    React.cloneElement(child, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    })
  );
};

export { TooltipsManager, TooltipWrapper };
