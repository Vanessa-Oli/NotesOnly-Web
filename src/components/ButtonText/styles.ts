import styled from "styled-components";

export interface ButtonTextContainerProps {
  isActive?: boolean;
}

export const ButtonTextContainer = styled.button<ButtonTextContainerProps>`
  background: none;
  border: 0;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.PURPLE : theme.COLORS.GRAY_100};
  font-size: 1rem;
`;