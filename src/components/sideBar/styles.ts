import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        transform: translateX(-120%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(-120%);
        opacity: 0;
    }
`;

export const SideBarContainer = styled.div<{ isClosing?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 0 0 60px;
  height: 100vh;
  background-color: #383838ff;
  animation: ${({ isClosing }) => (isClosing ? slideOut : slideIn)} 0.5s
    ease-out;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 60px;
    flex: none;
  }
`;

export const CollapsedSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  background-color: transparent;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 1000;
`;

export const ToggleButton = styled.div`
  position: absolute;
  bottom: 20px;
  left: 10px;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const SideBarItem = styled.div`
  padding: 12px 16px;
`;

export const SideBarHeader = styled.div`
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const SideBarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 100%;
`;

export const SideBarLogo = styled.img`
  width: 40px;
  height: 40px;
`;
