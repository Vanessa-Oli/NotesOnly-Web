import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  color: ${({ theme}) => theme.COLORS.BACKGROUND_800};

  height: 3.5rem;
  padding: 0 1rem;
  margin-top: 1rem;
  border: 0;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;