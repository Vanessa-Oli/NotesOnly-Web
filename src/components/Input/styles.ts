import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin-bottom: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 10px;

  > input {
    width: 100%;
    height: 3.5rem;

    padding: 0 1rem;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 1rem;
  }
`;