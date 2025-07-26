import React from "react";
import styled from "styled-components";

interface IconProps {
  icon: React.ReactNode;
  size?: number | string;
  color?: string;
  className?: string;
  isSelected?: boolean;
}

interface StyledIconContainerProps {
  size: number | string;
  color: string;
}

const StyledIconContainer = styled.div<StyledIconContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
  height: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
  color: ${({ color }) => color};
  font-size: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};

  &:hover {
    scale: 1.3;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const Icon: React.FC<IconProps> = ({
  icon,
  size = 19,
  color = "#ffffff",
  className = "",
  isSelected = false,
}) => {
  const selectedColor = "#ff9800";
  const iconColor = isSelected ? selectedColor : color;

  return (
    <StyledIconContainer size={size} color={iconColor} className={className}>
      {icon}
    </StyledIconContainer>
  );
};

export default Icon;
