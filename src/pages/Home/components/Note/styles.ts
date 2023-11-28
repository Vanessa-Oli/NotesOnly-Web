import styled from "styled-components";

export const NoteContainer = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  padding: 1rem 1.375rem;
  border: 0;
  border-radius: 10px;

  & + & {
    margin-top: 1rem;
  }

  > h2 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    margin-top: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
  }
`;