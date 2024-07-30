import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

interface FlashMessageProps {
  message: string;
  duration?: number; // Duration in milliseconds
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOuts = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const FlashMessageContainer = styled.div<{
  fadeOut: boolean;
  success: boolean;
}>`
  position: fixed;
  top: 20px;
  right: 30px;
  background-color: ${({ success }) => (success ? "#2fdc77" : "#e15244")};
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
  opacity: 0;
  animation: ${({ fadeOut }) => css`
    ${fadeIn} 0.5s forwards,
    ${fadeOut
      ? css`
          ${fadeOuts} 0.5s forwards
        `
      : "none"}
  `};
`;
