import styled from "styled-components";

interface NoteItemContainerProps {
  isNew: boolean;
}

export const NoteItemContainer = styled.div<NoteItemContainerProps>`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 0.5rem;
  border-radius: 10px;
  padding-right: 1rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.GREEN};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }

  > input {
    width: 100%;
    height: 3.5rem;

    padding: 0.75rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;